import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Footer from './components/Footer.tsx'
import MobileHeader from './components/MobileHeader.tsx'
import TopNavBar from './components/TopNavbar.tsx'

const isDesktop = window.innerWidth > 768

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {isDesktop ? <TopNavBar /> : <MobileHeader />}
    <App />
    <Footer />
  </React.StrictMode>
)
