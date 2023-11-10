import { PropsWithChildren } from 'react'
import { render } from 'react-dom'

export function searchUp(pathName: string) {
  console.log(pathName)
  return 'https://' + pathName
}

export function checkPath(path: string) {
  return /^[./\\]+$/.test(path)
}

export type Test = number | string
