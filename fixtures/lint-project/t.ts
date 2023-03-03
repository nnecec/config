import { PropsWithChildren } from 'react'

export function searchUp(pathName: string) {
  console.log(pathName)
}

export function checkPath(path: string) {
  return /^[./\\]+$/.test(path)
}
