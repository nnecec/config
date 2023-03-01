import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import App from '~/pages/app'

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
