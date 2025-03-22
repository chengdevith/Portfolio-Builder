import { useLocation } from "react-router-dom";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import LogoWithName from "../assets/Logo_images/LogoWithName.png";
import DropDownProfile from "./DropDownProfile";

const NavComponent = () => {
  const location = useLocation();

  const getActiveClass = (path) => {
    return location.pathname === path
      ? "border-b-2 border-color-primary text-color-primary" // Active state
      : "text-gray-500 hover:text-color-primary"; // Default state
  };

  return (
    <Navbar
      fluid
      rounded
      className="lg:!px-[150px] shadow-lg sticky top-0 z-20 bg-transparent backdrop-blur-md"
    >
      <NavbarBrand href="/">
        <img
          src={LogoWithName}
          className="mr-3 h-12 sm:h-14" // Increased from h-6 to h-10 and sm:h-9 to sm:h-12
          alt="Flowbite React Logo"
        />
      </NavbarBrand>
      <div className="flex md:order-2 gap-4">
        {/* <Button className="!bg-color-primary hover:!bg-color-secondary">
          Get started
        </Button> */}
        <DropDownProfile />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" className={`nav-link ${getActiveClass("/")}`}>
          Home
        </NavbarLink>
        <NavbarLink
          href="/template"
          className={`nav-link ${getActiveClass("/template")}`}
        >
          Template
        </NavbarLink>
        <NavbarLink
          href="/blog"
          className={`nav-link ${getActiveClass("/blog")}`}
        >
          Blog
        </NavbarLink>
        <NavbarLink
          href="/about"
          className={`nav-link ${getActiveClass("/about")}`}
        >
          About
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavComponent;
