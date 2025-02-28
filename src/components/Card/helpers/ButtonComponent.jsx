
"use client";

import { Dropdown } from "flowbite-react";
import { Button } from "flowbite-react";

export function ResumeComponent() {
  return (
    <Dropdown label="Resume"  dismissOnClick={false} 
    class="relative inline-flex items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
      <Dropdown.Item>All Fields</Dropdown.Item>
      <Dropdown.Item>Student</Dropdown.Item>
      <Dropdown.Item>Professional</Dropdown.Item>
      <Dropdown.Item>Beginner</Dropdown.Item>
    </Dropdown>
  );
}

export function PortfolioComponent() {
  return (
    <Dropdown label="Portfolio"  dismissOnClick={false} 
    class="relative !flex-row items-center justify-between p-0.5  me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
      <Dropdown.Item>All Fields</Dropdown.Item>
      <Dropdown.Item>Student</Dropdown.Item>
      <Dropdown.Item>Professional</Dropdown.Item>
      <Dropdown.Item>Beginner</Dropdown.Item>
    </Dropdown>
  );
}


export function ActiveButton() {
  return (
    <Button color="gray" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  font-medium rounded-lg text-sm py-0.5 text-center me-2">All Fields</Button>
  );
}
    