import React from 'react'
import NavComponent from '../components/NavComponent'
import { Outlet } from 'react-router-dom'
import FooterComponent from '../components/FooterComponent'

const RootLayout = () => {
  return (
    <>
    <NavComponent/>
    <main>
        <Outlet/>
    </main>
    <footer>
        <FooterComponent/>
    </footer>
    </>
  )
}

export default RootLayout;