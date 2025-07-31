import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer/Footer.jsx'
import Header from './component/Header/Header.jsx'

const App = () => {
  return (
   <>
   <Header />
   <Outlet />
   <Footer />
   </>
  )
}

export default App
