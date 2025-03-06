import React from 'react'
import NavComponent from '../components/NavComponent'
import NavNotLogInComponent from '../components/NavNotLogInComponent'
import { Outlet } from 'react-router-dom'
import FooterComponent from '../components/FooterComponent'

const RootLayout = () => {
  return (
    <>
    <NavNotLogInComponent/>
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