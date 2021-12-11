import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { StackExchangeProvider } from './context/context'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-1qmjaj6c.us.auth0.com'
      clientId='D5PWSjJDxC0zPlO2br7dQbNjcntWwi3Y'
      cacheLocation='localstorage'
    >
      <StackExchangeProvider>
        <App />
      </StackExchangeProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
