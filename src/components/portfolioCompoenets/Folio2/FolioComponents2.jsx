import React, { useState } from "react";
import Devith from "../../../assets/Member_images/devith.jpg";

const FolioComponents2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => {
      return !prev;
    });
  };

  return (
    <div className="p-5 md:p-10 text-gray-800">
      <section className="bg-purple-100 rounded-2xl p-5">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between">
            <a className="text-3xl font-bold pr-5 border border-purple-100 border-r-purple-400 mr-5">
              NewGen
            </a>
            {/* Menu Button for small screens */}
            <button
              onClick={handleMenuToggle}
              className="lg:hidden p-2 focus:outline-none z-50"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              <ul className="flex space-x-4 font-bold text-gray-600">
                <li className="border rounded-md border-purple-100 hover:border-purple-300">
                  <a className="px-3 py-2 block" href="#">
                    Home
                  </a>
                </li>
                <li className="border rounded-md border-purple-100 hover:border-purple-300">
                  <a className="px-3 py-2 block" href="#">
                    About
                  </a>
                </li>
                <li className="border rounded-md border-purple-100 hover:border-purple-300">
                  <a className="px-3 py-2 block" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="border rounded-md border-purple-100 hover:border-purple-300">
                  <a className="px-3 py-2 block" href="#">
                    Services
                  </a>
                </li>
              </ul>
              <a
                className="text-sm bg-red-500 text-white px-2 py-2 rounded-lg font-bold flex items-center"
                href="#"
              >
                <span className="pr-1 hidden lg:block">Book a Service</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                </svg>
              </a>
            </div>
          </nav>
          {/* Mobile Menu */}
          <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden mt-4`}>
            <ul className="font-bold text-gray-600 space-y-2">
              <li>
                <a className="px-3 py-2 block" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="px-3 py-2 block" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="px-3 py-2 block" href="#">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="px-3 py-2 block" href="#">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div className="flex py-10 md:py-20 lg:py-36">
            <div className="lg:w-1/2">
              <h1 className=" lg:text-left lg:text-7xl">
                The
                <span className="font-bold text-gray-950">
                  New Generation
                </span>{" "}
                has arrived.
              </h1>
              <p className="mt-5 italic text-sm md:text-lg text-center lg:text-left text-gray-600">
                We bequeath our knowledge to the next generation.
              </p>
              <div className="flex mt-12 justify-center lg:justify-start">
                <a
                  href="#"
                  className="bg-purple-600 px-3 text-lg py-2 rounded-lg text-white font-semibold"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="bg-red-600 px-3 text-lg py-2 ml-5 rounded-lg text-white font-semibold"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="w-1/2 hidden lg:block">
              <img src={Devith} alt="Homepage Photo" />
            </div>
          </div>
          <div className="flex mt-24 lg:mt-0 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <span className="cursor-pointer pl-1">Scroll Down</span>
          </div>
        </div>
      </section>
      <section className="bg-red-100 rounded-2xl p-5 mt-4">
        <div className="container mx-auto">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-center">
              Our Services
            </h1>
            <p className="w-full lg:w-1/2 text-center mx-auto mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              mollitia facere dolores animi laborum minima a minus, veritatis
              amet nesciunt in voluptatum nostrum quisquam iusto dicta neque
              ipsam beatae. Pariatur?
            </p>
          </div>
          <div className="flex flex-wrap justify-center pb-10">
            <div className="w-full md:w-1/2 xl:w-1/3 p-5">
              <div className="bg-white p-2 lg:p-10 rounded-2xl shadow-xl">
                <p className="max-w-fit mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10"
                  >
                    <path d="M6 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 111.5 0v7.5A.75.75 0 016 12zM18 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0118 12zM6.75 20.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM18.75 18.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 011.5 0zM12.75 5.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM12 21a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0112 21zM3.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM12 11.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM15.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z" />
                  </svg>
                </p>
                <h3 className="text-2xl font-bold text-center py-2">Design</h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  voluptatibus non velit ea? Doloribus maxime qui quidem, atque
                  laboriosam consequatur aliquid modi fuga eos, ex quas ut nobis
                  officiis iusto.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-5">
              <div className="bg-white p-2 lg:p-10 rounded-2xl shadow-xl">
                <p className="max-w-fit mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
                <h3 className="text-2xl font-bold text-center py-2">
                  Development
                </h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  voluptatibus non velit ea? Doloribus maxime qui quidem, atque
                  laboriosam consequatur aliquid modi fuga eos, ex quas ut nobis
                  officiis iusto.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-5">
              <div className="bg-white p-2 lg:p-10 rounded-2xl shadow-xl">
                <p className="max-w-fit mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
                      clipRule="evenodd"
                    />
                    <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                    <path
                      fillRule="evenodd"
                      d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
                <h3 className="text-2xl font-bold text-center py-2">Testing</h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  voluptatibus non velit ea? Doloribus maxime qui quidem, atque
                  laboriosam consequatur aliquid modi fuga eos, ex quas ut nobis
                  officiis iusto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-green-100 rounded-2xl p-5 mt-4">
        <div className="container mx-auto lg:px-28">
          <div className="bg-green-500 rounded-2xl p-10">
            <h1 className="text-white text-lg lg:text-4xl font-bold text-center">
              Companies who trust on us
            </h1>
            <div className="flex flex-wrap lg:mt-8">
              <div className="w-full lg:w-1/4 mt-7 px-8">
                <img
                  src={Devith}
                  alt="CompaniesLogo"
                  className="max-h-12 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-red-100 rounded-2xl p-5 mt-4">
        <div className="container mx-auto">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-center">
              Our Portfolio
            </h1>
            <p className="w-full lg:w-1/2 text-center mx-auto mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              mollitia facere dolores animi laborum minima a minus, veritatis
              amet nesciunt in voluptatum nostrum quisquam iusto dicta neque
              ipsam beatae. Pariatur?
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-1/2 py-6 lg:pt-24">
              <div className="w-10/12 md:w-8/12 mx-auto">
                <div className="bg-white rounded-3xl shadow-xl">
                  <img
                    src={Devith}
                    alt="Our Product"
                    className="rounded-t-3xl"
                  />
                  <div className="mt-3">
                    <p>
                      <span className="ml-2 bg-blue-200 rounded-3xl py-1 px-2 border border-blue-500">
                        Design
                      </span>
                      <span className="ml-2 bg-blue-200 rounded-3xl py-1 px-2 border border-blue-500">
                        Branding
                      </span>
                    </p>
                    <h3 className="font-bold text-center text-xl py-4">
                      Design Item 1
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16 mb-8">
            <a
              href="#"
              className="bg-blue-800 rounded-lg py-3 px-5 text-white font-bold"
            >
              Explore
            </a>
          </div>
        </div>
      </section>
      <section className="bg-red-100 rounded-2xl p-5 mt-4">
        <div className="container mx-auto">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-center">
              Testimonials
            </h1>
            <p className="w-full lg:w-1/2 text-center mx-auto mt-4">
              What our clients say
            </p>
            <div className="flex flex-wrap my-10">
              <div className="w-full md:w-1/2 lg:w-1/3 p-0 md:p-5 my-3">
                <div className="bg-purple-200 p-5 rounded-xl">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </p>
                  <p className="mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, maiores quam natus nihil soluta itaque unde amet id
                    accusamus iure laudantium ab deleniti, voluptas quaerat
                    repudiandae aperiam aliquam sint. Aut?
                  </p>
                  <h3 className="font-bold mt-3">Name</h3>
                  <p>Company, Destination</p>
                  <p className="flex mt-3">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-gray-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-red-100 rounded-2xl p-5 mt-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 p-10">
              <img src={Devith} alt="Our Product" className="rounded-xl" />
            </div>
            <div className="w-full lg:w-1/2 p-1 lg:p-10">
              <h1 className="text-2xl lg:text-5xl font-semibold">
                Welcome to our
                <span className="text-red-600 font-extrabold">NewGen</span>
              </h1>
              <p className="mt-4 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis eum facere repudiandae dolor cumque molestias quisquam
                expedita. Illo, beatae. Doloribus laboriosam rem mollitia
                consequatur repellat nesciunt est eos beatae ad.
              </p>
              <div>
                <form action="#">
                  <div className="flex rounded-xl focus-within:border border-purple-500">
                    <label
                      htmlFor={1}
                      className="w-auto rounded-l-xl flex bg-white p-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 my-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </label>
                    <div className="w-full">
                      <label
                        htmlFor={1}
                        className="block rounded-tr-xl text-gray-500 bg-white"
                      >
                        Enter your Name
                      </label>
                      <input
                        type="text"
                        name="#"
                        placeholder="Name"
                        id={1}
                        className="w-full p-3 rounded-br-xl border-none"
                      />
                    </div>
                  </div>
                  <div className="flex rounded-xl focus-within:border border-purple-500 my-8">
                    <label
                      htmlFor={2}
                      className="w-auto rounded-l-xl flex bg-white p-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 my-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </label>
                    <div className="w-full">
                      <label
                        htmlFor={2}
                        className="block rounded-tr-xl text-gray-500 bg-white"
                      >
                        Enter your Mail ID
                      </label>
                      <input
                        type="text"
                        name="#"
                        id={2}
                        placeholder="Email"
                        className="w-full rounded-br-xl p-3 border-none"
                      />
                    </div>
                  </div>
                  <div className="mt-1 flex">
                    <button className="mx-auto w-auto bg-blue-600 text-white p-3 rounded-xl font-semibold">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="rounded-2xl p-5 mt-4">
        <div className="container mx-auto">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-center">
              Our Team
            </h1>
            <p className="w-full lg:w-1/2 text-center mx-auto mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ut
              tempora doloribus officiis libero accusantium sit eligendi tempore
              adipisci repudiandae! Voluptate modi, quasi expedita ducimus
              quisquam veniam similique neque aperiam!
            </p>
          </div>
          <div className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-purple-50 rounded-xl p-3">
                <img
                  src={Devith}
                  alt="Member1"
                  className="mx-auto rounded-3xl shadow-2xl w-52"
                />
                <h2 className="font-bold text-blue-950 text-xl mt-2 text-center">
                  Dhuruvagish
                </h2>
                <p className="text-red-600 font-semibold bg-purple-300 w-fit mx-auto px-1 mt-1 border border-purple-900 rounded-xl">
                  Web Designer
                </p>
                <ul className="flex justify-center">
                  <li className="p-2 bg-white rounded-lg shadow m-2 border border-gray-300">
                    <a href="#" className="text-gray-600">
                      <svg
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                  </li>
                  <li className="p-2 bg-white rounded-lg shadow m-2 border border-gray-300">
                    <a href="#" className="text-gray-600">
                      <svg
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </li>
                  <li className="p-2 bg-white rounded-lg shadow m-2 border border-gray-300">
                    <a href="#" className="text-gray-600">
                      <svg
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-red-100 rounded-2xl p-5 mt-4">
        <div className="container mx-auto">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-center">
              Contact Us
            </h1>
            <p className="w-full lg:w-1/2 text-center mx-auto mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ut
              tempora doloribus officiis libero accusantium sit eligendi tempore
              adipisci repudiandae! Voluptate modi, quasi expedita ducimus
              quisquam veniam similique neque aperiam!
            </p>
          </div>
          <div className="my-8 lg:w-1/2 mx-auto">
            <form action="#">
              <div className="flex rounded-xl focus-within:border border-purple-500">
                <label
                  htmlFor={4}
                  className="w-auto rounded-l-xl flex bg-white p-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 my-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </label>
                <div className="w-full">
                  <label
                    htmlFor={4}
                    className="block rounded-tr-xl text-gray-500 bg-white"
                  >
                    Enter your Name
                  </label>
                  <input
                    type="text"
                    name="#"
                    id={4}
                    className="w-full p-2 rounded-br-xl border-none"
                  />
                </div>
              </div>
              <div className="flex rounded-xl focus-within:border border-purple-500 my-8">
                <label
                  htmlFor={3}
                  className="w-auto rounded-l-xl flex bg-white p-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 my-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </label>
                <div className="w-full">
                  <label
                    htmlFor={3}
                    className="block rounded-tr-xl text-gray-500 bg-white"
                  >
                    Enter your Mail ID
                  </label>
                  <input
                    type="text"
                    name="#"
                    id={3}
                    className="w-full rounded-br-xl p-2 border-none"
                  />
                </div>
              </div>
              <div className="flex rounded-xl focus-within:border border-purple-500 my-8">
                <label
                  htmlFor={5}
                  className="w-auto rounded-l-xl flex bg-white p-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 my-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </label>
                <div className="w-full">
                  <label
                    htmlFor={5}
                    className="block rounded-tr-xl text-gray-500 bg-white"
                  >
                    Gender
                  </label>
                  <select
                    name="#"
                    id={5}
                    className="w-full rounded-br-xl p-2 border-none"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div className="flex rounded-xl focus-within:border border-purple-500 my-8">
                <label
                  htmlFor={6}
                  className="w-auto rounded-l-xl flex bg-white p-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 my-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </label>
                <div className="w-full bg-white rounded-r-xl">
                  <label
                    htmlFor={6}
                    className="block rounded-tr-xl text-gray-500 bg-white"
                  >
                    Comment
                  </label>
                  <textarea
                    name="#"
                    id={6}
                    rows={5}
                    className="w-full rounded-br-xl p-2 border-none "
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="mt-1 flex">
                <button className="mx-auto w-auto bg-blue-600 text-white p-3 rounded-xl font-semibold">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="rounded-2xl p-5 mt-4">
        <div className="container mx-auto bg-gradient-to-r from-red-500 to-purple-600 rounded-xl text-white">
          <div className="p-8">
            <h1 className="text-3xl md:text-5xl font-bold text-center">
              Let's do something amazing
            </h1>
            <p className="w-full lg:w-1/2 text-center mx-auto mt-4">
              Get in touch with us
            </p>
            <div className="flex mt-8">
              <a
                href="#"
                className="bg-white mx-auto text-blue-950 font-semibold px-3 py-2 rounded-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="rounded-2xl p-5 my-4 bg-gray-900 text-white">
        {/*NewGen in the Footer*/}
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 md:p-5 lg:p-10">
              <h2 className="font-bold text-2xl">NewGen</h2>
              <p className="text-gray-400 my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                ipsa assumenda voluptas dolores corporis atque aperiam harum ex
                nam autem? Officiis labore optio quo hic ipsa! Voluptas error
                libero necessitatibus?
              </p>
            </div>
            {/*Address lines in the Footer*/}
            <div className="w-full md:w-1/3 md:p-5 lg:p-10">
              <h2 className="font-bold text-2xl">Address</h2>
              <address className="text-gray-400 my-4">
                <span className="block">Address Line 1</span>
                <span className="block">Address Line 2</span>
                <span className="block">Address Line 3</span>
                <span className="block">607106</span>
              </address>
            </div>
            {/*Inquiries in the Footer*/}
            <div className="w-full md:w-1/3 md:p-5 lg:p-10">
              <h2 className="font-bold text-2xl">Inquiries</h2>
              <div className="text-gray-400 my-4">
                <span className="block">000-000-000</span>
                <span className="block">hari@gmail.com</span>
                <ul className="flex">
                  <li className="p-2 bg-white rounded-lg shadow my-2 mr-2 border border-gray-300">
                    <a href="#" className="text-gray-600">
                      <svg
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                  </li>
                  <li className="p-2 bg-white rounded-lg shadow m-2 border border-gray-300">
                    <a href="#" className="text-gray-600">
                      <svg
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </li>
                  <li className="p-2 bg-white rounded-lg shadow m-2 border border-gray-300">
                    <a href="#" className="text-gray-600">
                      <svg
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-0 border-t pt-3">
            <p className="text-center text-gray-400">All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FolioComponents2;
