import React, { useMemo, Validator, useState } from 'react'

import { searchUp } from './t'

const useDiv = () => {
  return {
    className: 'p-2',
  }
}

export function App() {
  const [count, setCount] = useState(0)

  const countPlus = useMemo(() => count + 1, [])

  const printEvent = e => {
    searchUp(e, count)
  }

  return (
    <div>
      <div {...useDiv()} />
      <button onClick={printEvent}>Click me</button>
      <a href="www.baidu.com">baidu</a>
      {countPlus ? <div>{countPlus}</div> : null}
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </div>
  )
}
