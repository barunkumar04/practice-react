import React from 'react'
import ReactDOM from 'react-dom/client'
import Welcome from './Welcome'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <App />
      <Welcome/>
  </React.StrictMode>,
)
