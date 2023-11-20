import { useEffect, useMemo, useRef, useState } from 'react'

type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>

const defaultState: ObserverRect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
}

export function useResizeObserver<T extends HTMLElement = any>() {
  const frameID = useRef(0)
  const ref = useRef<T>(null)

  const [rect, setRect] = useState<ObserverRect>(defaultState)

  const observer = useMemo(
    () =>
      typeof window === 'undefined' ? null : (
        new ResizeObserver((entries: any) => {
          const entry = entries[0]

          if (entry) {
            cancelAnimationFrame(frameID.current)

            frameID.current = requestAnimationFrame(() => {
              if (ref.current) {
                setRect(entry.contentRect)
              }
            })
          }
        })
      ),
    [],
  )

  useEffect(() => {
    if (observer && ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer?.disconnect()

      if (frameID.current) {
        cancelAnimationFrame(frameID.current)
      }
    }
  }, [observer])

  return [ref, rect] as const
}

export function useElementSize<T extends HTMLElement = any>() {
  const [ref, { height, width }] = useResizeObserver<T>()
  return { height, ref, width }
}
