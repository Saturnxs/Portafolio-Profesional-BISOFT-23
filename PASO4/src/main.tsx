import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Footer from './components/Footer.tsx'
import MobileHeader from './components/MobileHeader.tsx'
import TopNavBar from './components/TopNavbar.tsx'

import i18next from './i18n'
import { I18nextProvider } from 'react-i18next'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <TopNavBar />
      <MobileHeader />
      <App />
      <Footer />
    </I18nextProvider>
  </React.StrictMode>
)
