import React from 'react'
import NavComponent from './NavComponent'
import { Outlet } from 'react-router-dom'
import FooterComponent from './FooterComponent'

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

export default RootLayout