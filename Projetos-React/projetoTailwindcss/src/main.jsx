import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NewApp from './components/NewApp'
import './index.css'
import List from './list'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <List/>
    {/* <NewApp/> */}
  </React.StrictMode>,
)
