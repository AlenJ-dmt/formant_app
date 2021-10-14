import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { RobotProvider } from "./Context"

ReactDOM.render(
  <RobotProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RobotProvider>,
  document.getElementById('root')
)
