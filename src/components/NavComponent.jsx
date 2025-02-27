import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
const NavComponent = () => {
    return (
        <Navbar fluid rounded className='lg:!px-[150px] '>
          <NavbarBrand href="https://flowbite-react.com">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltIAHUYT6u7GKhj-UIX_fU1Pf0sySCFH_aw&s" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-color-primary">Portify</span>
          </NavbarBrand>
          <div className="flex md:order-2 gap-4">
            <Button className='bg-white  text-color-description  border-color-primary  hover:!bg-purple-100 '>Log in </Button>
            <Button className='btn text-color-description'>Get started</Button>
            <NavbarToggle />
          </div>
          <NavbarCollapse  >
            <NavbarLink href="/"  className="nav-link">
              Home
            </NavbarLink>
            <NavbarLink href="#" className='nav-link '>Template</NavbarLink>
            <NavbarLink href="#" className='nav-link'>Blog</NavbarLink>
            <NavbarLink href="#" className='nav-link'>About</NavbarLink>
          </NavbarCollapse>
        </Navbar>
      );
}

export default NavComponent