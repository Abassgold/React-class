import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import Counter from './Redux/Counter.jsx'

const store = configureStore({
  reducer: {
    Counter: Counter
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
