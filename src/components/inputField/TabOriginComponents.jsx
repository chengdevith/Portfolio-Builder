import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import SkillForm from "./SkillForm";
import WeForm from "./WeForm";
import ContactForm from "./ContactForm";
import ProjectForm from "../inputField/ProjectForm"
import ServiceForm from "../inputField/ServiceForm"
export function TabOriginComponent() {
  return (
    <div className="overflow-x-auto">
      <Tabs aria-label="Full width tabs" variant="fullWidth">
        <Tabs.Item active title="Personal">
          <div className="mb-4">
            <label className="block font-medium" htmlFor="full-name">
              Hired Date
            </label>
            <input
              id="full-name"
              name="fullname"
              type="text"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-[#875AFA]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium" htmlFor="about">
              About
            </label>
            <textarea
              id="about"
              name="about"
              type="text"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-[#875AFA]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium" htmlFor="email">
              email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-[#875AFA]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium" htmlFor="phone">
              Phone NUmber
            </label>
            <input
              id="phone"
              name="phone"
              type="email"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-[#875AFA]"
              required
            />
          </div>
        </Tabs.Item>
        <Tabs.Item title="Skill">
            <SkillForm/>
        </Tabs.Item>
        <Tabs.Item title="Work Experience">
          <WeForm/>
        </Tabs.Item>
        <Tabs.Item title="Contacts">
            <ContactForm/>
        </Tabs.Item>
        <Tabs.Item title="Project">
            <ProjectForm/>
        </Tabs.Item>
        <Tabs.Item title="Service">
            <ServiceForm/>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}