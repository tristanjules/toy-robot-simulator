import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import ToyRobotApp from './presentation/App'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ToyRobotApp />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)
