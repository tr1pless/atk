import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Navigation } from './Components/Navigation/Navigation'
import { store } from './Components/store/store'
import { Provider } from 'react-redux'
import { Footer } from './Components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
)
