import React, { useState } from "react";

import ImageSlider from "./components/homeComponents/ImageSilder";
import FeatureCardComponent from "./components/homeComponents/FeatureCardComponent";
import ChooseUsCard from "./components/homeComponents/ChooseUsCard";
import { Button } from "flowbite-react";
import line from "./assets/homeImage/line.png";
import lineBottom from "./assets/homeImage/line-bottom.png";
import FeatureData from "./mock-data/feature";
import ChooseUseData from "./mock-data/chooseUse";

function App() {
  const [feature, setFeature] = useState(FeatureData);
  const [chooseUse, setChooseUSe] = useState(ChooseUseData);
  return (
    <>
      {/* hero section */}
      <section className="bg-gradient-to-r from-[#634BA7] to-[#A632CD]  md:rounded-l-[50px] md:rounded-br-[200px] px-2 md:px-10 lg:px-36 py-10 lg:py-32 mb-20  ">
        <div className="text-white grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-4 ">
          <div className="flex flex-col items-center text-center md:text-start md:items-start">
            <h1>Showcase your work with a portfolio website</h1>

            <p className="text-white my-8 text-xl ">
              From intuitive design features to built-in marketing tools,
              discover the complete solution for building an online portfolio
              that stands out.
            </p>
            <Button className="btn w-32">Get started</Button>
          </div>
          <div className="md:col-span-2">
            <ImageSlider />
          </div>
        </div>
      </section>
      <section className=" each-section  text-center">
        <div>
          <h2 className="text-color-primary mb-12">
            Design your online portfolio
          </h2>
          <div className="flex flex-col md:flex-row  gap-3 lg:gap-10 justify-center items-center">
            {feature.map((e) => {
              return (
                <FeatureCardComponent
                  key={e.id}
                  id={e.id}
                  image={e.image}
                  title={e.title}
                  description={e.description}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* template */}
      <section className="each-section">
        <div className="text-center m-auto mb-12 ">
          <h2 className="text-color-primary mb-2">
            Portfolio Showcasing Your Best work
          </h2>
          <p className="description">
            Choose from 900+ customizable templates to start building your free
            portfolio website—and present your work the way it's meant to be
            seen.
          </p>
        </div>
        <div></div>
      </section>
      <section className="each-section">
        <div className="text-center">
          <h2 className="text-color-primary mb-2">Why Choose Us?</h2>
          <p className="description">
            Because your portfolio deserves to be as fabulous as you are!
          </p>
        </div>
        <div className="flex flex-col md:flex-row  gap-3 lg:gap-10 justify-center items-center mt-12">
          {chooseUse.map((e) => {
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
          <div className="text-center m-auto mb-12 ">
            <h2 className="text-color-primary  mb-2">How It Works</h2>
            <p className="description">Grow Up Your Money Saving</p>
          </div>
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
              <h5 className="  py-4">Expense Trackering</h5>
              <p className="description">
                We use an application designed a testing gnose to keep away
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
              <h5 className="py-4">Expense Trackering</h5>
              <p className="description">
                We use an application designed a testing gnose to keep away
              </p>
            </div>
            <div className="text-center cursor-pointer">
              <div className="relative bg-white inline-block px-6 py-3 rounded-lg cursor-pointer hover:text-white hover:bg-color-primary ease-in duration-200">
                <p className="text-5xl">3</p>
              </div>
              <h5 className=" py-4">Expense Trackering</h5>
              <p className="description">
                We use an application designed a testing gnose to keep away
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
