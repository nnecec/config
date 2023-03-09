import React, { useState } from 'react'
import { Router } from 'react-router-dom'
import { json, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Button } from 'antd'

import { SITE_CONFIG } from 'components/constants'

import type { LoaderFunction } from '@remix-run/node'
import type { ChangeEvent, PropsWithChildren } from 'react'

import { searchUp } from './t'

import type { Test } from './t'

interface Props {
  defaultValue: number
}
export const loader: LoaderFunction = () => {}

export function App(props: PropsWithChildren<Props>) {
  const { defaultValue } = props
  const [count, setCount] = useState<Test>(defaultValue)

  const printEvent = (e: ChangeEvent<HTMLInputElement>) => {
    searchUp(e.target.value)
  }

  return (
    <div>
      <input onChange={printEvent} />
      <a href="www.baidu.com">baidu</a>
      <div>
        {count}
        <Button onClick={() => setCount(count + 1)}>+1</Button>
      </div>
    </div>
  )
}
