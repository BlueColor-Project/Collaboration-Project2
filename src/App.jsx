import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer/Footer.jsx'
import Header from './component/Header/Header.jsx'
import styled from 'styled-components'

const App = () => {
  return (
   <Container>
   <Header />
   <Outlet />
   <Footer />
   </Container>
  )
}

export default App

const Container = styled.div`
    height: 100vh;
    width: 100%;
`