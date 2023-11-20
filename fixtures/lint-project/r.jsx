import React, { Validator, useMemo, useState } from 'react'

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

  const animalName =
    pet.canBark() ?
      (pet.isScary() ?
        'wolf'
      : 'dog')
    : pet.canMeow() ? 'cat'
    : 'probably a bunny'

  return (
    <div>
      <div {...useDiv()} />
      <button onClick={printEvent}>Click me</button>
      <a className="text-red-500 text-sm p-2" href="www.baidu.com">
        baidu
      </a>
      {countPlus ?
        <div>{countPlus}</div>
      : count > 5 ?
            ? <div>more than 5</div>
      : <div>less than 5</div>}

      <a className="text-red-500 p-2 text-sm" href="www.baidu.com">
        baidu
      </a>
      {countPlus ?
        <div>{countPlus}</div>
      : count > 5 ?
        <div>more than 5</div>
      : <div>less than 5</div>}
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </div>
  )
}
