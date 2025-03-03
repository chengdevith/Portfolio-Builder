import React, { useState } from "react";
import { Button, Dropdown, Card } from "flowbite-react";
import { ImEye } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";
import CardLists from "../../mock-data/cardList";

const FilterComponent = () => {
  const [filters, setFilters] = useState({ type: "", category: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [CardList, setCardList] = useState(CardLists);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const filteredData = CardList.filter((item) => {
    return (
      (filters.type ? item.type === filters.type : true) &&
      (filters.category ? item.category === filters.category : true) &&
      (searchTerm ? item.title.toLowerCase().includes(searchTerm.toLowerCase()) : true)&&
      (searchTerm ? item.category.toLowerCase().includes(searchTerm.toLowerCase()) : true)
    );
  });

  return (
    <div className=" m-auto">
      <div className="flex gap-4 mb-20 justify-center items-center">
        {/* All Fields Button */}
        <Button
          color={filters.type === "" ? "purple" : "gray"}
          onClick={() => setFilters({ type: "", category: "" })}
        >
          All Fields
        </Button>

        {/* Resume Button with Dropdown */}
        <Dropdown
          label="Resume"
          dismissOnClick={false}
          inline
          renderTrigger={() => (
            <Button
              color={filters.type === "Resume" ? "purple" : "gray"}
            >
              Resume
              <IoChevronDownOutline className="w-4 h-4 ml-2" />
            </Button>
          )}
        >
          <Dropdown.Item
            onClick={() => setFilters({ type: "Resume", category: "" })}
          >
            All Fields of Resume
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => setFilters({ type: "Resume", category: "Student" })}
          >
            Student
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => setFilters({ type: "Resume", category: "Beginner" })}
          >
            Beginner
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => setFilters({ type: "Resume", category: "Professional" })}
          >
            Professional
          </Dropdown.Item>
        </Dropdown>

        {/* Portfolio Button with Dropdown */}
        <Dropdown
          label="Portfolio"
          dismissOnClick={false}
          inline
          renderTrigger={() => (
            <Button
              color={filters.type === "Portfolio" ? "purple" : "gray"}
            >
              Portfolio
              <IoChevronDownOutline className="w-4 h-4 ml-2" />
            </Button>
          )}
        >
          <Dropdown.Item
            onClick={() => setFilters({ type: "Portfolio", category: "" })}
          >
            All Fields of Portfolio
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => setFilters({ type: "Portfolio", category: "Student" })}
          >
            Student
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => setFilters({ type: "Portfolio", category: "Beginner" })}
          >
            Beginner
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => setFilters({ type: "Portfolio", category: "Professional" })}
          >
            Professional
          </Dropdown.Item>
        </Dropdown>

        {/* Custom Search Bar */}
        <form className="w-1/2" onSubmit={handleSearch}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative p-0.5">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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

      {/* Display Filtered Data */}
      <div className=" m-auto cardList grid xl:grid-cols-3 sm:grid-cols-2 gap-20 each-section">
        {filteredData.map((item) => (
          <div key={item.id} className="relative cardItem group hover:scale-110 overflow-hidden duration-300">
            <div className="border border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 bg-gray-200 overflow-hidden">
              <a href="#">
                <img
                  className="h-60 w-full rounded-t-lg bg-gray-200 transition-transform duration-300"
                  src={item.image}
                  alt={item.title}
                />
              </a>
              <div className="px-5 py-3">
                <a href="#">
                  <h2 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h2>
                </a>
                <a href="#">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.category}
                  </p>
                </a>
              </div>
            </div>

            {/* Hover Buttons */}
            <div className="absolute bottom-24 left-0 w-full h-60 rounded-t-md bg-black/20 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="w-20 h-8 flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white text-xl rounded-xl shadow-lg hover:scale-110 transition-transform">
                <ImEye />
              </button>
              <button className="w-20 h-8 flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white text-xl rounded-xl shadow-lg hover:scale-110 transition-transform">
                <FaRegEdit />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;