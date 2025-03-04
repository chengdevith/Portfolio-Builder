
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import DropDownProfile from "./DropDownProfile";
const NavComponent = () => {
  return (
    <Navbar fluid rounded className="lg:!px-[150px] shadow-lg shadow-purple-200  sticky top-0 z-20">
      <NavbarBrand href="https://flowbite-react.com">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltIAHUYT6u7GKhj-UIX_fU1Pf0sySCFH_aw&s"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-color-primary">
          Portify
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-4 ">
          {/* <Button className="bg-white  text-color-description  border-color-primary  hover:!bg-purple-100 ">
            Log in
          </Button> */}
        <Button className="btn">Get started</Button>
        <DropDownProfile/>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" className="nav-link">
          Home
        </NavbarLink>
        <NavbarLink href="/template" className="nav-link ">
          Template
        </NavbarLink>
        <NavbarLink href="blog" className="nav-link">
          Blog
        </NavbarLink>
        <NavbarLink href="about" className="nav-link">
          About
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavComponent;
