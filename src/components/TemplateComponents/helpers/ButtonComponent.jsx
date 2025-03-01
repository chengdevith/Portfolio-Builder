
"use client";

import { Dropdown } from "flowbite-react";
import { Button } from "flowbite-react";

export function ResumeComponent() {
  return (
    <Dropdown label="Resume"  dismissOnClick={false} outline gradientDuoTone="purpleToBlue"
    class="relative p-0.5  me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
      <ul className="flex flex-rows justify-between w-auto">
        <Dropdown.Item className="hover:text-color-secondary">All Fields</Dropdown.Item>
        <Dropdown.Item className="hover:text-color-secondary">Student</Dropdown.Item>
        <Dropdown.Item className="hover:text-color-secondary">Professional</Dropdown.Item>
        <Dropdown.Item className="hover:text-color-secondary">Beginner</Dropdown.Item>
      </ul>
    </Dropdown>
  );
}

export function PortfolioComponent() {
  return (
    <Dropdown label="Portfolio"  dismissOnClick={false} outline gradientDuoTone="purpleToBlue"
    class="relative p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4  focus:ring-blue-300 dark:focus:ring-blue-800">
      <ul className="flex flex-rows justify-between w-auto">
        <Dropdown.Item className="hover:text-color-secondary">All Fields</Dropdown.Item>
        <Dropdown.Item className="hover:text-color-secondary">Student</Dropdown.Item>
        <Dropdown.Item className="hover:text-color-secondary">Professional</Dropdown.Item>
        <Dropdown.Item className="hover:text-color-secondary">Beginner</Dropdown.Item>
      </ul>
    </Dropdown>
  );
}


export function ActiveButton() {
  return (
    <Button color="gray" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  font-medium rounded-lg text-sm py-0.5 text-center me-2">All Fields</Button>
  );
}
    