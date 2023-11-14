import { useState } from 'react'
import type { ReactElement } from 'react'

import reactLogo from './react.svg'

function App(): ReactElement {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header className="pt-header">header</header>
      <div>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img alt="Vite logo" className="logo" src="/vite.svg" />
        </a>
        <a href="https://reactjs.org" rel="noreferrer" target="_blank">
          <img alt="React logo" className="logo react" src={reactLogo} />
        </a>
      </div>
      <h1 className="text-9xl">Vite + React</h1>
      <div className="p-8">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
