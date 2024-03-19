// React entry point
import React from 'react'
import ReactDOM from 'react-dom/client'

// i18n
import i18next from './utils/i18n.ts'
import { I18nextProvider } from 'react-i18next'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// ScrollToTop
import ScrollToTop from 'react-scroll-to-top'
import { IoMdRocket } from "react-icons/io";

// Components
import App from './App.tsx'
import Footer from './components/Footer.tsx'
import MobileHeader from './components/MobileHeader.tsx'
import TopNavBar from './components/TopNavbar.tsx'

// Custom
import './utils/utils.ts'
import './css/custom.css'


AOS.init()

// Render
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <TopNavBar />
      <MobileHeader />
      <App />
      <Footer />
      <ScrollToTop smooth component={<IoMdRocket className='text-white' size={30} />} className="hover-light-on" />
    </I18nextProvider>
  </React.StrictMode>
)
