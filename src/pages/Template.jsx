import React from "react";
import FilterComponent from "../components/TemplateComponents/FilterComponent";

export default function Template() {
  return (
    <>
      <section className=" bg-gray-100 min-h-auto mt-12">
        <div className="max-w-4xl mx-auto text-center mb-12 px-10">
          <h2 className="text-4xl font-bold mb-4 text-purple-600">
            Need inspiration?
          </h2>
          <p className=" description">
            See how the creatives below customized their Portfolio themes.
          </p>
        </div>
      </section>
      <FilterComponent />
    </>
  );
}
