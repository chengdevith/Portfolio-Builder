import React from "react";
import { ResumeComponent } from "../components/TemplateComponents/helpers/ButtonComponent";
import { PortfolioComponent } from "../components/TemplateComponents/helpers/ButtonComponent";
import { ActiveButton } from "../components/TemplateComponents/helpers/ButtonComponent";
import CardComponent from "../components/TemplateComponents/CardComponent";
import NavComponent from "../components/NavComponent";

export default function Template() {
  return (
    <>
      <section>
        <div className="p-6 bg-gray-100 min-h-auto mb-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-purple-600">
              Need inspiration?
            </h1>
            <p className="text-gray-600 mb-6">
              See how the creatives below customized their Portfolio themes.
            </p>
          </div>

          <div className=" m-auto max-w-screen-lg flex justify-between items-center px-14">
            <div className="">
              <div className="flex space-x-4 items-center">
                <ActiveButton />

                {/* dropdown  */}
                <ResumeComponent />

                <PortfolioComponent />
              </div>
            </div>

            <form class=" w-1/2">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative p-0.5">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class=" block w-full py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  className="pt-1 text-white absolute end-2.5 bottom-2.5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <CardComponent />
    </>
  );
}
