import React, { useState, useEffect } from "react";
import { Button, Dropdown, Card } from "flowbite-react";
import { IoChevronDownOutline } from "react-icons/io5";
import TemplateCardComponent from "./TemplateCardComponent";
import { useGetAllTemplatesQuery } from "../../redux/services/typeTemplateSlice";
import { useNavigate } from "react-router-dom";

const FilterComponent = () => {
  const { data: template, isLoading, error } = useGetAllTemplatesQuery();
  const [filters, setFilters] = useState({ type: "", category: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [CardList, setCardList] = useState(null);
  const navigate = useNavigate();
  
  // Sync CardList with template when template changes
  useEffect(() => {
    if (template) {
      setCardList(template);
    }
  }, [template]);
  
  const handleSearch = (e) => {
    e.preventDefault();
  };
  console.log(CardList)
  // Only filter if CardList is defined
  const handleClick = (id) => {
    navigate(`/template/${id-5}`,{state:id-5});
  };
  const filteredData = CardList
  ? CardList.filter((item) => {
      // Check if description contains the search term (case-insensitive)
      return searchTerm
        ? item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase())
        : true; // If no search term, show all items
    })
  : [];
  // Handle loading state with a spinner effect
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-500"></div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        <p>
          Error loading templates: {error.message || "Something went wrong"}
        </p>
      </div>
    );
  }

  return (
    <section>
      <div className="m-auto px-10">
        <div className="flex gap-4 mb-20 justify-center items-center">
          {/* All Fields Button */}
          <Button
            className="border-2 border-color-primary text-color-description hover:text-white"
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
                className="border-2 border-color-primary text-color-description hover:text-white"
                color={filters.type === "Resume" ? "purple" : "purple"}
              >
                Resume
                <IoChevronDownOutline className="w-4 h-4 ml-2" />
              </Button>
            )}
          >
            <Dropdown.Item
              className="hover:text-color-primary"
              onClick={() => setFilters({ type: "Resume", category: "" })}
            >
              All Fields of Resume
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:text-color-primary"
              onClick={() =>
                setFilters({ type: "Resume", category: "Student" })
              }
            >
              Student
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:text-color-primary"
              onClick={() =>
                setFilters({ type: "Resume", category: "Beginner" })
              }
            >
              Beginner
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:text-color-primary"
              onClick={() =>
                setFilters({ type: "Resume", category: "Professional" })
              }
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
                className="border-2 border-color-primary text-color-description hover:text-white"
                color={filters.type === "Portfolio" ? "purple" : "purple"}
              >
                Portfolio
                <IoChevronDownOutline className="w-4 h-4 ml-2" />
              </Button>
            )}
          >
            <Dropdown.Item
              className="hover:text-color-primary"
              onClick={() => setFilters({ type: "Portfolio", category: "" })}
            >
              All Fields of Portfolio
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:text-color-primary"
              onClick={() =>
                setFilters({ type: "Portfolio", category: "Student" })
              }
            >
              Student
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:text-color-primary"
              onClick={() =>
                setFilters({ type: "Portfolio", category: "Beginner" })
              }
            >
              Beginner
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:text-color-primary"
              onClick={() =>
                setFilters({ type: "Portfolio", category: "Professional" })
              }
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
        <div className="max-w-screen-xl m-auto cardList grid xl:grid-cols-3 sm:grid-cols-2 gap-10">
      {filteredData.map((e) => (
        <div 
          key={e.id}
          onClick={() => handleClick(e.id)} // Pass the specific id
          className="cursor-pointer" // Add cursor pointer for better UX
        >
          <TemplateCardComponent
            id={e.id}
            image={e.image}
            title={e.description}
            category={e.name}
          />
        </div>
      ))}
    </div>
      </div>
    </section>
  );
};

export default FilterComponent;
