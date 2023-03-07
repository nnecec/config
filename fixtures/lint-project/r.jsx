import React, { ReactElement,useState } from 'react'

import { searchUp } from './t'

export function App () {
  const [count, setCount] = useState(0)

  const printEvent = e => {
    searchUp(e, count)
  }

  return (
    <div>
      <div />
      <button onClick={ printEvent }>Click me</button>
      <a href="www.baidu.com">baidu</a>
      <div>
        { count }
        <button onClick={ () => setCount(count + 1) }>+1</button>
      </div>
    </div>
  )
}