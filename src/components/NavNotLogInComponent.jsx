import { useLocation } from "react-router-dom";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import DropDownProfile from "./DropDownProfile";

const NavNotLogInComponent = () => {
  const location = useLocation();

  const getActiveClass = (path) => {
    return location.pathname === path
      ? "border-b-2 border-color-primary text-color-primary" // Active state
      : "text-gray-500 hover:text-color-primary"; // Default state
  };

  return (
    <Navbar fluid rounded className="lg:!px-[150px] shadow-lg shadow-purple-200 sticky top-0 z-20">
      <NavbarBrand href="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltIAHUYT6u7GKhj-UIX_fU1Pf0sySCFH_aw&s"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-color-primary">
          Portify
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-4">
        <Button className="!bg-transparent text-color-primary !border-color-primary hover:!bg-purple-100">Log In</Button>
        <Button className="!bg-color-primary hover:!bg-color-secondary">Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" className={`nav-link ${getActiveClass("/")}`}>
          Home
        </NavbarLink>
        <NavbarLink href="/template" className={`nav-link ${getActiveClass("/template")}`}>
          Template
        </NavbarLink>
        <NavbarLink href="/blog" className={`nav-link ${getActiveClass("/blog")}`}>
          Blog
        </NavbarLink>
        <NavbarLink href="/about" className={`nav-link ${getActiveClass("/about")}`}>
          About
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavNotLogInComponent;
