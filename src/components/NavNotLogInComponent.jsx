import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import LogoWithName from "../assets/Logo_images/LogoWithName.png";

const NavNotLogInComponent = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
  
      const sections = document.querySelectorAll("section");
      console.log("Sections found:", sections.length); // Verify sections are detected
      const scrollPosition = window.scrollY + 80;
  
      sections.forEach((section, index) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        console.log(`Section ${index}: Top=${top}, Height=${height}, Scroll=${scrollPosition}`);
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(navLinks[index]);
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getActiveClass = (path) => {
    return activeSection === path
      ? "border-b-2 border-color-primary text-color-primary"
      : "text-gray-500 hover:text-color-primary";
  };

  return (
    <Navbar
      fluid
      rounded
      className={`lg:!px-[150px] sticky top-0 z-20 bg-transparent backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "border-b border-gray-300" : ""
      }`}
    >
      <NavbarBrand href="/">
        <img
          src={LogoWithName}
          className="mr-3 h-12 sm:h-14"
          alt="Flowbite React Logo"
        />
      </NavbarBrand>
      <div className="flex md:order-2 gap-4">
        <Button className="!bg-transparent text-color-primary !border-color-primary hover:!bg-purple-100">
          <Link to={"/login"}>Login</Link>
        </Button>
        <Button className="!bg-color-primary hover:!bg-color-secondary">
          Get started
        </Button>
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

export default NavNotLogInComponent;