import React, { useState } from 'react'
import type { ChangeEvent, PropsWithChildren } from 'react'
import { Router } from 'react-router-dom'

import { Button } from 'antd'

import type { Test } from './t'

import { searchUp } from './t'

interface Props {
  defaultValue: number
}

export function App(props: PropsWithChildren<Props>) {
  const { defaultValue } = props
  const [count, setCount] = useState<Test>(defaultValue)

  const printEvent = (e: ChangeEvent<HTMLInputElement>) => {
    searchUp(e.target.value)
    const a =
      '0123456789' +
      '0123456789' +
      '0123456789' +
      '0123456789' +
      '0123456789' +
      '0123456789' +
      '0123456789' +
      '0123456789' +
      '0123456789' +
      '0123456789'
    const b = '0123456789' + '0123456789' + '0123456789' + '0123456789' + '0123456789'
  }

  return (
    <div>
      <input onChange={printEvent} />
      <a href="www.baidu.com">baidu</a>
      <div>
        {count}
        <Button onClick={() => setCount(Number(count) + 1)}>+1</Button>
      </div>
    </div>
  )
}
