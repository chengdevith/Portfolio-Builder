import React from "react";
import final from "./final.module.css";
import "./output.css";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useState } from "react";
import Devith from "../../../assets/Member_images/Devith.png";

const FolioComponents1 = () => {
  useEffect(() => {
    // Register GSAP TextPlugin and animate quote
    gsap.registerPlugin(TextPlugin);
    gsap.to(".my-quotes", {
      duration: 4,
      delay: 1.5,
      text: '"Sometimes, information is more dangerous than weapons" - Orochimaru',
    });

    // Initialize AOS
    AOS.init({ duration: 1000, once: true });

    // Navbar Fixed and To-Top Logic
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector("#to-top");

    const handleScroll = () => {
      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed"); // Corrected
        toTop?.classList.remove("hidden");
        toTop?.classList.add("flex");
      } else {
        header.classList.remove("navbar-fixed"); // Corrected
        toTop?.classList.remove("flex");
        toTop?.classList.add("hidden");
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="absolute left-0 top-0 z-10 flex w-full items-center bg-transparent">
        <div className={final.container}>
          <div className="relative flex items-center justify-between">
            <div className="px-4">
              <a
                href="#home"
                className={`block py-6 text-lg font-bold ${final["text-primary"]}`}
              >
                Cheng Devith
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="absolute right-4 block lg:hidden"
              >
                <span
                  className={` ${final["hamburger-line"]} origin-top-left transition duration-300 ease-in-out`}
                />
                <span
                  className={` ${final["hamburger-line"]} transition duration-300 ease-in-out`}
                />
                <span
                  className={` ${final["hamburger-line"]} origin-bottom-left transition duration-300 ease-in-out`}
                />
              </button>
              <nav
                id="nav-menu"
                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className={` ${final["hover:text-primary"]} mx-8 flex py-2 text-base font-semibold text-dark  dark:text-white`}
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className={` ${final["hover:text-primary"]} mx-8 flex py-2 text-base font-semibold text-dark  dark:text-white`}
                    >
                      About Me
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className={` ${final["hover:text-primary"]} mx-8 flex py-2 text-base font-semibold text-dark  dark:text-white`}
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#clients"
                      className={` ${final["hover:text-primary"]} mx-8 flex py-2 text-base font-semibold text-dark  dark:text-white`}
                    >
                      Clients
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#blog"
                      className={` ${final["hover:text-primary"]} mx-8 flex py-2 text-base font-semibold text-dark  dark:text-white`}
                    >
                      Blog
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className={` ${final["hover:text-primary"]} mx-8 flex py-2 text-base font-semibold text-dark  dark:text-white`}
                    >
                      Contact
                    </a>
                  </li>
                  <li className="mt-3 flex items-center pl-8 lg:mt-0">
                    <div className="flex">
                      <span className="mr-2 text-sm text-slate-500 dark:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height={20}
                          viewBox="0 96 960 960"
                          width={20}
                          className="fill-current"
                        >
                          <path d="M480 696q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-.226 72Q400 768 344 711.774t-56-136Q288 496 344.226 440t136-56Q560 384 616 440.226t56 136Q672 656 615.774 712t-136 56ZM84 612q-15.3 0-25.65-10.289Q48 591.421 48 576.211 48 561 58.35 550.5 68.7 540 84 540h96q15.3 0 25.65 10.289 10.35 10.29 10.35 25.5Q216 591 205.65 601.5 195.3 612 180 612H84Zm696 0q-15.3 0-25.65-10.289-10.35-10.29-10.35-25.5Q744 561 754.35 550.5 764.7 540 780 540h96q15.3 0 25.65 10.289 10.35 10.29 10.35 25.5Q912 591 901.65 601.5 891.3 612 876 612h-96ZM480.211 312Q465 312 454.5 301.65 444 291.3 444 276v-96q0-15.3 10.289-25.65 10.29-10.35 25.5-10.35Q495 144 505.5 154.35 516 164.7 516 180v96q0 15.3-10.289 25.65-10.29 10.35-25.5 10.35Zm0 696Q465 1008 454.5 997.65 444 987.3 444 972v-96q0-15.3 10.289-25.65 10.29-10.35 25.5-10.35Q495 840 505.5 850.35 516 860.7 516 876v96q0 15.3-10.289 25.65-10.29 10.35-25.5 10.35ZM242 389l-50-51q-11-10-11-24.5t11-25.5q10.435-11 25.217-11Q232 277 242 288l51 50q11 10.941 11 25.529 0 14.589-11 25.53Q283 400 268 400t-26-11Zm476 475-51-50q-11-10.667-11-25.333Q656 774 667 763q10-11 25-11t26 11l50 51q11 10 11 24.5T768.478 864Q757 875 743 875q-14 0-25-11Zm-51.059-475Q656 379 656 364t11-26l51-50q11-11 25-10.5t25 10.543Q779 299 779 313t-11 25l-50 51q-10.941 11-25.529 11-14.589 0-25.53-11ZM192 864q-11-10.435-11-25.217Q181 824 192 814l50-51q10.667-10 25.333-10Q282 753 293 763q11 11 10.542 25.667Q303.083 803.333 293 814l-51 50q-10 11-24.5 11T192 864Zm288-288Z" />
                        </svg>
                      </span>
                      <input
                        type="checkbox"
                        className="hidden"
                        id="dark-toggle"
                      />
                      <label htmlFor="dark-toggle">
                        <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                          <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out" />
                        </div>
                      </label>
                      <span className="ml-2 text-sm text-slate-500 dark:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height={20}
                          viewBox="0 96 960 960"
                          width={20}
                          className="fill-current"
                        >
                          <path d="M479.961 912Q340 912 242 814t-98-238q0-140 97.93-238t237.831-98q13.057 0 25.648 1T531 244q-39 29-62 72t-23 92q0 85 58.5 143.5T648 610q49 0 92-23t72-62q2 13 3 25.591 1 12.591 1 25.648 0 139.901-98.039 237.831-98.04 97.93-238 97.93Zm.039-72q82 0 148.776-47.074Q695.553 745.853 727 670q-20 5-39.667 8.5Q667.667 682 648 682q-113.858 0-193.929-80.071T374 408q0-19.667 3.5-39.333Q381 349 386 329q-75.853 31.447-122.926 98.224Q216 494 216 576q0 110 77 187t187 77Zm-14-250Z" />
                        </svg>
                      </span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section id="home" className="pt-36 dark:bg-dark">
        <div className={final.container}>
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1
                className={` ${final["text-primary"]} text-base font-semibold md:text-xl`}
                data-aos="fade-right"
                data-aos-duration={1500}
              >
                Hello Everyone 👋, I'm
                <span className="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl">
                  Cheng Devith
                </span>
              </h1>
              <h2
                className="mb-5 mt-3 text-lg font-medium text-dark dark:text-white lg:text-2xl"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-delay={300}
              >
                Study at RUPP &amp; ISTAD
              </h2>
              <p
                className={`${final["text-secondary"]} my-quotes md:text-md mb-10 font-medium italic leading-relaxed`}
              />
              <a
                href="#"
                className={` ${final["bg-primary"]} rounded-full px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg`}
              >
                Contact Me
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div
                className="relative mt-10 lg:right-0 lg:mt-9"
                data-aos="zoom-in"
                data-aos-duration={1500}
              >
                <img
                  src={Devith}
                  alt="devith"
                  className="relative z-10 mx-auto max-w-[350px]"
                />
                <span className="absolute -bottom-20 left-1/2 -translate-x-1/2 md:-bottom-6 md:scale-125" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="pb-32 pt-36 dark:bg-dark">
        <div className={final.container}>
          <div className="flex flex-wrap">
            <div
              className="mb-10 w-full px-4 lg:w-1/2"
              data-aos="zoom-in"
              data-aos-duration={800}
            >
              <h4
                className={` ${final["text-primary"]} mb-3 text-lg font-bold uppercase`}
              >
                About Me
              </h4>
              <h2 className="mb-5 max-w-md text-3xl font-bold text-dark dark:text-white lg:text-4xl">
                Let's learn web programming
              </h2>
              <p
                className={` ${final["text-secondary"]} max-w-xl text-base font-medium lg:text-lg`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique illo deleniti obcaecati, fugiat placeat corporis
                incidunt!
              </p>
            </div>
            <div
              className="w-full px-4 lg:w-1/2"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-delay={200}
            >
              <h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white lg:pt-10 lg:text-3xl">
                Let's be friends
              </h3>
              <p
                className={` ${final["text-secondary"]} mb-6 text-base font-medium lg:text-lg`}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, accusamus. Ducimus nulla sed, quasi quam corporis
                suscipit quod!
              </p>
              <div className="flex items-center">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/steve_wyyy?igsh=MWdkMjNpd284NmpyOQ=="
                  target="_blank"
                  className={` ${final["hover:bg-primary"]} ${final["hover:border-primary"]} mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:text-white`}
                >
                  <svg
                    role="img"
                    width={20}
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
                {/* Twitter */}
                <a
                  href="https://x.com/chengdevith?s=21&t=kTBuENlZ8QnCWBytVop67A"
                  target="_blank"
                  className={` ${final["hover:bg-primary"]} ${final["hover:border-primary"]} mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:text-white`}
                >
                  <svg
                    role="img"
                    width={20}
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Twitter</title>
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/cheng-devith-674b58325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  className={` ${final["hover:bg-primary"]} ${final["hover:border-primary"]} mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:text-white`}
                >
                  <svg
                    role="img"
                    width={20}
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {/* Github */}
                <a
                  href="https://github.dev/chengdevith/"
                  target="_blank"
                  className={` ${final["hover:bg-primary"]} ${final["hover:border-primary"]} mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:text-white`}
                >
                  <svg
                    role="img"
                    width={20}
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section Start */}
      <section
        id="portfolio"
        className="bg-slate-100 pb-16 pt-36 dark:bg-slate-800"
      >
        <div className={final.container}>
          <div
            className="w-full px-4"
            data-aos="zoom-in"
            data-aos-duration={1000}
          >
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4
                className={` ${final["text-primary"]} mb-2 text-lg font-semibold`}
              >
                Portfolio
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                New Projects
              </h2>
              <p
                className={` ${final["text-secondary"]} text-md font-medium md:text-lg`}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                animi ab iusto minus corporis sapiente incidunt deserunt labore
                cum expedita!
              </p>
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
            <div
              className="mb-12 p-4 md:w-1/2"
              data-aos="flip-up"
              data-aos-duration={500}
            >
              <div className="overflow-hidden rounded-md shadow-md">
                <a
                  href="https://chengdevith.github.io/food-delivery/"
                  target="_blank"
                >
                  <img src={Devith} alt="Landing Page" width="w-full" />
                </a>
              </div>
              <a
                href="https://chengdevith.github.io/food-delivery/"
                target="_blank"
              >
                <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">
                  Landing Page I Gede Rio Arya Bawesi
                </h3>
              </a>
              <p
                className={` ${final["text-secondary"]} text-base font-medium`}
              >
                Portfolio Website Landing Page Project that I created using
                Bootstrap 5 Framework
              </p>
            </div>
            <div
              className="mb-12 p-4 md:w-1/2"
              data-aos="flip-up"
              data-aos-duration={500}
              data-aos-delay={50}
            >
              <div className="overflow-hidden rounded-md shadow-md">
                <a
                  href="https://chengdevith.github.io/food-delivery/"
                  target="_blank"
                >
                  <img src={Devith} alt="Metal Store" width="w-full" />
                </a>
              </div>
              <a
                href="https://chengdevith.github.io/food-delivery/"
                target="_blank"
              >
                <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">
                  Metal Store
                </h3>
              </a>
              <p
                className={` ${final["text-secondary"]} text-base font-medium`}
              >
                E-Commerce project I created for Metal Store.
              </p>
            </div>
            <div
              className="mb-12 p-4 md:w-1/2"
              data-aos="flip-up"
              data-aos-duration={500}
              data-aos-delay={100}
            >
              <div className="overflow-hidden rounded-md shadow-md">
                <a
                  href="https://chengdevith.github.io/food-delivery/"
                  target="_blank"
                >
                  <img src={Devith} alt="Bookshelf Apps" width="w-full" />
                </a>
              </div>
              <a
                href="https://chengdevith.github.io/food-delivery/"
                target="_blank"
              >
                <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">
                  Bookshelf Apps
                </h3>
              </a>
              <p
                className={` ${final["text-secondary"]} text-base font-medium`}
              >
                The To-Do Apps project that I made with the title Bookshelf
                Apps. This project is to complete exam submission on the
                Programming Learning Website.
              </p>
            </div>
            <div
              className="mb-12 p-4 md:w-1/2"
              data-aos="flip-up"
              data-aos-duration={500}
              data-aos-delay={150}
            >
              <div className="overflow-hidden rounded-md shadow-md">
                <a
                  href="https://chengdevith.github.io/food-delivery/"
                  target="_blank"
                >
                  <img src={Devith} alt="Pinky Shop" width="w-full" />
                </a>
              </div>
              <a
                href="https://chengdevith.github.io/food-delivery/"
                target="_blank"
              >
                <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">
                  Pinky Shop
                </h3>
              </a>
              <p
                className={` ${final["text-secondary"]} text-base font-medium`}
              >
                E-Commerce project I created for Pinky Shop.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Clients Section Start */}
      <section
        id="clients"
        className="bg-slate-800 pb-32 pt-36 dark:bg-slate-300"
      >
        <div className={final.container}>
          <div
            className="w-full px-4"
            data-aos="zoom-in"
            data-aos-duration={1000}
          >
            <div className="mx-auto mb-16 text-center">
              <h4
                className={` ${final["text-primary"]} mb-2 text-lg font-semibold `}
              >
                Clients
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-white dark:text-dark sm:text-4xl lg:text-5xl">
                My Partners
              </h2>
              <p
                className={` ${final["text-secondary"]} text-md font-medium md:text-lg `}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus eius ullam modi?
              </p>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a
                href="#"
                className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
                data-aos="fade-right"
                data-aos-duration={1000}
                data-aos-delay={500}
              >
                <img src={Devith} alt="Google" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section Start */}
      <section id="blog" className="bg-slate-100 pb-32 pt-36 dark:bg-dark">
        <div className={final.container}>
          <div
            className="w-full px-4"
            data-aos="zoom-in"
            data-aos-duration={1000}
          >
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4
                className={` ${final["text-primary"]} mb-2 text-lg font-semibold`}
              >
                Blog
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                Recent Posts
              </h2>
              <p
                className={` ${final["text-secondary"]} text-md font-medium md:text-lg`}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate ea voluptates aspernatur labore?
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190813181110/7-Tips-and-Tricks-to-Learn-Programming-Faster.png"
                  alt="Programming"
                  className="h-[310px] w-full"
                />
                <div className="px-6 py-8">
                  <h3>
                    <a
                      href="#"
                      target="_blank"
                      className={` ${final["hover:text-primary"]} mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white`}
                    >
                      Programming Learning Tips
                    </a>
                  </h3>
                  <p
                    className={` ${final["text-secondary"]} mb-6 text-base font-medium text-secondary`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus pariatur quod iure quisquam molestias ex
                    optio!
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-80"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
                <img
                  src="https://i.ytimg.com/vi/2oX0le-lyJI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAzjd3h0GeVreDUksMjxxvn5lydmQ"
                  alt="Mechanical Keyboard"
                  className="h-[310px] w-full"
                />
                <div className="px-6 py-8">
                  <h3>
                    <a
                      href="#"
                      target="_blank"
                      className={` ${final["hover:text-primary"]} mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white`}
                    >
                      Logitech Keyboard Review
                    </a>
                  </h3>
                  <p
                    className={` ${final["text-secondary"]} mb-6 text-base font-medium text-secondary`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero, illum eum quos suscipit voluptatem officiis
                    nesciunt!
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-80"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
                <img
                  src="https://www.appventurez.com/wp-content/uploads/2020/06/timeline-of-machine-learning-1.jpg"
                  alt="Machine Learning"
                  className="h-[310px] w-full"
                />
                <div className="px-6 py-8">
                  <h3>
                    <a
                      href="#"
                      target="_blank"
                      className={` ${final["hover:text-primary"]} mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white`}
                    >
                      History of Machine Learning
                    </a>
                  </h3>
                  <p
                    className={` ${final["text-secondary"]} mb-6 text-base font-medium text-secondary`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    quas ullam inventore commodi totam!
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-80"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Start */}
      <section id="contact" className="pb-32 pt-36 dark:bg-slate-800">
        <div className={final.container}>
          <div
            className="w-full px-4"
            data-aos="zoom-in"
            data-aos-duration={1000}
          >
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4
                className={` ${final["text-primary"]} mb-2 text-lg font-semibold`}
              >
                Contact
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                Contact Us
              </h2>
              <p
                className={` ${final["text-secondary"]} text-md font-medium md:text-lg`}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
                sunt?
              </p>
            </div>
          </div>
          <form>
            <div className="w-full lg:mx-auto lg:w-2/3">
              <div className="mb-8 w-full px-4">
                <label
                  htmlFor="name"
                  className={` ${final["text-primary"]} text-base font-bold`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={` ${final["focus:border-primary"]} ${final["focus:ring-primary"]} w-full rounded-md bg-slate-200 p-3 text-dark border-none focus:outline-none focus:ring-1`}
                />
              </div>
              <div className="mb-8 w-full px-4">
                <label
                  htmlFor="email"
                  className={` ${final["text-primary"]} text-base font-bold`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={` ${final["focus:border-primary"]} ${final["focus:ring-primary"]} w-full rounded-md bg-slate-200 p-3 text-dark border-none focus:outline-none focus:ring-1`}
                />
              </div>
              <div className="mb-8 w-full px-4">
                <label
                  htmlFor="message"
                  className={` ${final["text-primary"]} text-base font-bold`}
                >
                  Message
                </label>
                <textarea
                  type="message"
                  id="message"
                  className={` ${final["focus:border-primary"]} ${final["focus:ring-primary"]} h-32 w-full rounded-md bg-slate-200 p-3 text-dark  focus:outline-none focus:ring-1 border-none`}
                  defaultValue={""}
                />
              </div>
              <div className="w-full px-4">
                <button className={` ${final["bg-primary"]} w-full rounded-full bg-primary px-8 py-3 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg`}>
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Footer Start */}
      <footer className="bg-dark pb-12 pt-24">
        <div className={final.container}>
          <div className="flex flex-wrap">
            <div className="mb-12 w-full px-4 font-medium text-slate-300 md:w-1/3">
              <h2 className="mb-5 text-4xl font-bold text-white">
                Cheng Devith
              </h2>
              <h3 className="mb-2 text-2xl font-bold">Contact Us</h3>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  viewBox="0 96 960 960"
                  width={20}
                  className="mr-2 fill-current py-0"
                >
                  <path d="M168 864q-29 0-50.5-21.5T96 792V360q0-29 21.5-50.5T168 288h624q30 0 51 21.5t21 50.5v432q0 29-21 50.5T792 864H168Zm312-240 312-179v-85L480 539 168 360v85l312 179Z" />
                </svg>
                <p className="py-0">chengdevith5@gmail.com</p>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  viewBox="0 96 960 960"
                  width={20}
                  className="mr-2 fill-current py-0"
                >
                  <path d="M480.124 578Q514 578 538 553.876t24-58Q562 462 537.876 438t-58-24Q446 414 422 438.124t-24 58Q398 530 422.124 554t58 24ZM480 976Q319 837 239.5 721T160 504.2q0-151.2 96-239.7T480 176q128 0 224 88.5t96 239.7Q800 605 720.5 721 641 837 480 976Z" />
                </svg>
                <p className="py-0">
                  Stueng Mean Chey No. 241, Mean Chey, Phnom Penh
                </p>
              </div>
            </div>
            <div className="mb-12 w-full px-4 md:w-1/3">
              <h3 className="mb-5 text-xl font-semibold text-white">
                Categori
              </h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href="#"
                    className={` ${final["hover:text-primary"]} mb-3 inline-block text-base hover:text-primary`}
                  >
                    Programming
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={` ${final["hover:text-primary"]} mb-3 inline-block text-base hover:text-primary`}
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={` ${final["hover:text-primary"]} mb-3 inline-block text-base hover:text-primary`}
                  >
                    Lifestyle
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-12 w-full px-4 md:w-1/3">
              <h3 className="mb-5 text-xl font-semibold text-white">Link</h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href="#home"
                    className={` ${final["hover:text-primary"]} mb-3 inline-block text-base hover:text-primary`}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className={` ${final["hover:text-primary"]} mb-3 inline-block text-base hover:text-primary`}
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className={` ${final["hover:text-primary"]} mb-3 inline-block text-base hover:text-primary`}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#clients"
                    className={` ${final["hover:text-primary"]} mb-3 inline-block text-base hover:text-primary`}
                  >
                    Clients
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className={` ${final["hover:text-primary"]} mb-3 inline-block text-base hover:text-primary`}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className={` ${final["hover:text-primary"]} mb-3 inline-block text-base hover:text-primary`}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full border-t border-slate-700 pt-10">
            <div className="mb-5 flex items-center justify-center">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/steve_wyyy?igsh=MWdkMjNpd284NmpyOQ=="
                target="_blank"
                className={` ${final["hover:bg-primary"]} ${final["hover:border-primary"]} mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:text-white`}
              >
                <svg
                  role="img"
                  width={20}
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="https://x.com/chengdevith?s=21&t=kTBuENlZ8QnCWBytVop67A"
                target="_blank"
                className={` ${final["hover:bg-primary"]} ${final["hover:border-primary"]} mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:text-white`}
              >
                <svg
                  role="img"
                  width={20}
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Twitter</title>
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/cheng-devith-674b58325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                className={` ${final["hover:bg-primary"]} ${final["hover:border-primary"]} mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:text-white`}
              >
                <svg
                  role="img"
                  width={20}
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Github */}
              <a
                href="https://github.com/chengdevith"
                target="_blank"
                className={` ${final["hover:bg-primary"]} ${final["hover:border-primary"]} mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:text-white`}
              >
                <svg
                  role="img"
                  width={20}
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
            <p className="text-center text-xs font-medium text-slate-500">
              Created with
              <span className="text-pink-500">❤</span> by
              <a
                href="https://github.com/chengdevith"
                target="_blank"
                className={` ${final["text-primary"]} font-bold text-primary`}
              >
                Cheng Devith
              </a>
              , using
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="font-bold text-sky-500"
              >
                Tailwind CSS{" "}
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FolioComponents1;
