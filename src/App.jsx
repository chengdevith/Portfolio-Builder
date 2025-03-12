import React, { useState } from "react";
import ImageSlider from "./components/homeComponents/ImageSilder";
import FeatureCardComponent from "./components/homeComponents/FeatureCardComponent";
import ChooseUsCard from "./components/homeComponents/ChooseUsCard";
import { Button } from "flowbite-react";
import line from "./assets/homeImage/line.png";
import lineBottom from "./assets/homeImage/line-bottom.png";
import FaqComponent from "./components/homeComponents/FaqComponent";
import FilterComponent from "./components/TemplateComponents/FilterComponent";
import { FaLongArrowAltRight } from "react-icons/fa";
import TitleSectionComponen from "./components/homeComponents/TitleSectionComponen";
import feature from "./mock-data/feature";
import chooseUse from "./mock-data/chooseUse";
import Template from "./pages/Template";
import TemplateCardComponent from "./components/TemplateComponents/TemplateCardComponent";
import CardList from "./mock-data/cardList";
import Small_pices from "./assets/GIF_images/Small_pices.gif"

function App() {
  const [features, setFeature] = useState(feature);
  const [chooseUses, setChooseUse] = useState(chooseUse);
  return (
    <>
    {/* <BlogFormComponent/> */}
    {/* <TabListComponent/> */}
    {/* <SkillForm/> */}
      {/* hero section */}
      <section className="overflow-hidden bg-gradient-to-r from-[#634BA7] to-[#A632CD] md:rounded-l-[50px] h-[75vh] md:rounded-br-[200px] px-2 md:px-10 lg:px-36 py-10 lg:py-32 mb-20 flex items-center">
        <div className="text-white grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-4 overflow-hidden">
          <div className="flex flex-col items-center text-center md:text-start md:items-start">
            <h1 className="text-3xl md:text-5xl font-bold">
              Showcase your work with a portfolio website
            </h1>

            <p className="text-white my-8 text-xl line-clamp-4">
              From intuitive design features to built-in marketing tools,
              discover the complete solution for building an online portfolio
              that stands out.
            </p>
            <Button className="btn w-32">Get started</Button>
          </div>

          <div className="md:col-span-2 flex justify-center items-center relative">
            {/* Image Slider */}
            <ImageSlider />
          </div>
        {/* Animated Dots Effect */}
        <div className="absolute inset-0 pointer-events-none h-auto mt-52 md:rounded-l-[50px]  md:rounded-br-[200px]">
          {[...Array(100)].map((_, i) => (
            <span
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-70"
              style={{
                top: `${Math.random() * 70}%`,
                left: `${Math.random() * 100}%`,
                animation: `floatAnimation ${1 + Math.random() * 2}s ease-in-out infinite alternate`,
              }}
            ></span>
          ))}
        </div>
        </div>
    </section>
      <section className=" each-section  text-center">
        <div>
          <TitleSectionComponen title={"Design your online portfolio"} />
          <div className="flex flex-col md:flex-row  gap-3 lg:gap-10 justify-center items-center">
            {features.map((e) => {
              return (
                <FeatureCardComponent
                  key={e.id}
                  id={e.id}
                  image={e.image}
                  title={e.title}
                  description={e.description }
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* template */}
      <section className="each-section px-10">
        <TitleSectionComponen
          title={"Portfolio Showcasing Your Best work"}
          description={
            "Choose from 900+ customizable templates to start building your free portfolio website and present your work the way it's meant to be seen."
          }
        />
        <div className="max-w-screen-xl m-auto cardList grid xl:grid-cols-3 sm:grid-cols-2 gap-10">
          {CardList.slice(0,6).map((e) => {
            return (
              <TemplateCardComponent
                key={e.id}
                image={e.image}
                title={e.title}
                category={e.category}
              />
            );
          })}
        </div>
        <div>
          <a
            href="/template"
            className="flex items-center justify-center  gap-2 underline mt-12"
          >
            <p>See All Template</p>
            <FaLongArrowAltRight />
          </a>
        </div>
      </section>
      <section className="each-section">
        <TitleSectionComponen
          title={"Why Choose Us?"}
          description={
            "Because your portfolio deserves to be as fabulous as you are!"
          }
        />
        <div className="flex flex-col md:flex-row  gap-3 lg:gap-10 justify-center items-center ">
          {chooseUses.map((e) => {
            return (
              <ChooseUsCard
                key={e.id}
                id={e.id}
                image={e.image}
                label={e.label}
                title={e.title}
                description={e.description}
              />
            );
          })}
        </div>
      </section>
      <section className="each-section relative">
        <div>
          <TitleSectionComponen
            title={"How It Works"}
            description={
              "Your dream portfolio is just a click away! Join our community and start building today. Let’s make magic happen!"
            }
          />
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <div className="text-center cursor-pointer">
              <div className="relative bg-white inline-block px-6 py-3 rounded-lg cursor-pointer hover:bg-color-primary hover:text-white ease-in duration-200">
                <p className="text-5xl ">1</p>
                <div className="absolute w-48 top-6 left-1/2 transform -translate-x-1/2 lg:block hidden">
                  <img
                    className="w-full ml-52"
                    src={line}
                    alt="Line decoration"
                  />
                </div>
              </div>
              <h5 className="line-clamp-1 py-4">Explore Templates</h5>
              <p className="description line-clamp-2">
                Browse our extensive library of templates and find your perfect
                match.
              </p>
            </div>

            <div className="text-center cursor-pointer">
              <div className="relative inline-block px-6 py-3 rounded-lg cursor-pointer bg-color-primary text-white">
                <p className="text-5xl">2</p>
                <div className="absolute w-48 top-10 left-1/2 transform -translate-x-1/2 lg:block hidden">
                  <img
                    className="w-full ml-52"
                    src={lineBottom}
                    alt="Line decoration"
                  />
                </div>
              </div>
              <h5 className="py-4">Sign Up</h5>
              <p className="description line-clamp-2">
                Create an account and unlock a world of possibilities. It's free
                and easy!
              </p>
            </div>
            <div className="text-center cursor-pointer">
              <div className="relative bg-white inline-block px-6 py-3 rounded-lg cursor-pointer hover:text-white hover:bg-color-primary ease-in duration-200">
                <p className="text-5xl">3</p>
              </div>
              <h5 className=" py-4">Showcase Work</h5>
              <p className="description line-clamp-2">
                Upload your work and let the world see your talent. Shine bright
                like a diamond!
              </p>
            </div>
          </div>
        </div>
      </section>
     
      {/* FQA */}
      <section className="each-section">
        <TitleSectionComponen title={"Frequently Ask Question"} />
        <div>
          <FaqComponent />
        </div>
      </section>

    </>
  );
}

export default App;
