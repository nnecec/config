import React, { useState } from 'react'

import { searchUp } from './t'

export function App () {
  const [count, setCount] = useState<number>(0)

  const printEvent = e => {
    searchUp(count)
    console.log(e)
  }

  return (
    <div>
      <button onClick={ printEvent }>Click me</button>
      <a href="www.baidu.com">baidu</a>
      <div>
        { count }
        <button onClick={ () => setCount(count + 1) }>+1</button>
      </div>
    </div>
  )
}
