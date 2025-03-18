import React, { useState } from "react";
import ImageSlider from "./components/homeComponents/ImageSilder";
import FeatureCardComponent from "./components/homeComponents/FeatureCardComponent";
import ChooseUsCard from "./components/homeComponents/ChooseUsCard";
import { Button } from "flowbite-react";
import line from "./assets/homeImage/line.png";
import lineBottom from "./assets/homeImage/line-bottom.png";
import FaqComponent from "./components/homeComponents/FaqComponent";
import TitleSectionComponen from "./components/homeComponents/TitleSectionComponen";
import feature from "./mock-data/feature";
import chooseUse from "./mock-data/chooseUse";
import TemplateCardComponent from "./components/TemplateComponents/TemplateCardComponent";
import { useGetAllTemplatesQuery } from "./redux/services/typeTemplateSlice";

function App() {
  const { data: templates, isLoading, error } = useGetAllTemplatesQuery();
  const [features, setFeature] = useState(feature);
  const [chooseUses, setChooseUse] = useState(chooseUse);

  // Skeleton Loader Component for Templates
  const SkeletonTemplateCard = () => (
    <div className="animate-pulse">
      <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
      <div className="mt-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );

  // Initial Loading Spinner
  if (isLoading && !templates) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-500"></div>
      </div>
    );
  }

  // Error state
  if (error) {
    return <div className="text-center py-10 text-red-500">Error loading templates: {error.message}</div>;
  }

  const templateList = templates || [];

  return (
    <>
      {/* hero section */}
      <section className="overflow-hidden bg-gradient-to-r from-[#634BA7] to-[#A632CD] md:rounded-l-[50px] h-[75vh] md:rounded-br-[200px] px-2 md:px-10 lg:px-36 py-10 lg:py-32 mb-20 flex items-center">
        {/* ... hero section content ... */}
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
            <ImageSlider />
          </div>
          <div className="absolute inset-0 pointer-events-none h-auto mt-52 md:rounded-l-[50px] md:rounded-br-[200px]">
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

      {/* features section */}
      <section className="each-section text-center">
        <TitleSectionComponen title={"Design your online portfolio"} />
        <div className="flex flex-col md:flex-row gap-3 lg:gap-10 justify-center items-center">
          {features.map((e) => (
            <FeatureCardComponent
              key={e.id}
              id={e.id}
              image={e.image}
              title={e.title}
              description={e.description}
            />
          ))}
        </div>
      </section>

      {/* template section with skeleton loading */}
      <section className="each-section px-10">
        <TitleSectionComponen
          title={"Portfolio Showcasing Your Best work"}
          description={
            "Choose from 900+ customizable templates to start building your free portfolio website and present your work the way it's meant to be seen."
          }
        />
        <div className="max-w-screen-xl m-auto cardList grid xl:grid-cols-3 sm:grid-cols-2 gap-10">
          {isLoading ? (
            // Show skeleton loaders while loading
            Array(6)
              .fill(0)
              .map((_, index) => <SkeletonTemplateCard key={index} />)
          ) : (
            // Show actual templates when loaded
            templateList.slice(0, 6).map((e) => (
<TemplateCardComponent
key={e.id}
            id={e.id}
            image={e.image}
            title={e.description}
            category={e.name}
          />
            ))
          )}
        </div>
        {/* ... rest of template section ... */}
        <div className="mt-12 flex justify-center">
          <a
            href="/template"
            className="group relative flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
          >
            <span className="absolute inset-0 rounded-full bg-purple-600/20 blur-lg group-hover:scale-110 transition-transform duration-500"></span>
            <p className="relative text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-500 group-hover:-translate-x-1 transition-transform duration-200">
              See All Templates
            </p>
            <span className="relative flex items-center">
              <svg
                className="w-6 h-6 text-purple-400 group-hover:text-purple-300 group-hover:translate-x-2 transition-all duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
                <path
                  className="opacity-0 group-hover:opacity-50 transition-opacity duration-200"
                  stroke="currentColor"
                  strokeWidth="1"
                  d="M13 12h-3"
                />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* ... rest of your sections ... */}
      <section className="each-section">
        <TitleSectionComponen
          title={"Why Choose Us?"}
          description={"Because your portfolio deserves to be as fabulous as you are!"}
        />
        <div className="flex flex-col md:flex-row gap-3 lg:gap-10 justify-center items-center">
          {chooseUses.map((e) => (
            <ChooseUsCard
              key={e.id}
              id={e.id}
              image={e.image}
              label={e.label}
              title={e.title}
              description={e.description}
            />
          ))}
        </div>
      </section>

      <section className="each-section relative">
        <TitleSectionComponen
          title={"How It Works"}
          description={
            "Your dream portfolio is just a click away! Join our community and start building today. Let’s make magic happen!"
          }
        />
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          {/* ... how it works content ... */}
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
      </section>

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