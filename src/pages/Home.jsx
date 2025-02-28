import React from "react";
import NavComponent from "../components/NavComponent";
import ImageSlider from "../components/homeComponents/ImageSilder";
import FeatureCardComponent from "../components/homeComponents/FeatureCardComponent";
import ChooseUsCard from "../components/homeComponents/ChooseUsCard";
import {
  Button,
} from "flowbite-react";
const data = [
  {
    id: 1,
    image: "https://cdn-icons-png.flaticon.com/512/9709/9709605.png",
    title: "Effortless & Free Creation",
    description: "Craft a pro portfolio fast—no coding, totally free!",
  },
  {
    id: 2,
    image: "https://cdn-icons-png.flaticon.com/512/9709/9709605.png",
    title: "Stunning Templates",
    description: "Pick gorgeous designs to highlight your work.",
  },
  {
    id: 3,
    image: "https://cdn-icons-png.flaticon.com/512/9709/9709605.png",
    title: "Browser-Based Building",
    description: "Build & tweak anywhere, free—no downloads needed.",
  },
];
function Home() {
  return (
    <>
      <header>
        <NavComponent />
      </header>
      <main >
        {/* hero section */}
        <section className="bg-gradient-to-r from-[#634BA7] to-[#A632CD] p-20 rounded-l-[50px] rounded-br-[200px]">
          <div className="text-white grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">
            <div>
              <h1>Showcase your work with a portfolio website</h1>

              <p className="text-white my-8">
                From intuitive design features to built-in marketing tools,
                discover the complete solution for building an online portfolio
                that stands out.
              </p>
              <Button className="btn">Get started</Button>
            </div>
            <div>
              <ImageSlider />
            </div>
          </div>
        </section>
        <section className="lg:!p-20 text-center">
          <div>
            <h2 className="text-color-primary mb-10">Design your online portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center items-center px-10 ">
              {data.map((e) => {
                return (
                  <FeatureCardComponent
                    key={e.id}
                    image={e.image}
                    title={e.title}
                    description={e.description}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <section>
          <ChooseUsCard/>
        </section>
      </main>
    </>
  );
}

export default Home;
