import { useState } from "react";
import { HiUserCircle, HiClipboardList } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import SkillForm from "./SkillForm";
import WeForm from "./WeForm";
import ContactForm from "./ContactForm";
import ProjectForm from "../inputField/ProjectForm";
import ServiceForm from "../inputField/ServiceForm";

export function TabListComponent() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl">
      {/* Tab Header */}
      <div className="flex flex-wrap items-center justify-center gap-4 bg-gray-100 p-3 rounded-xl">
        {[
          { id: "personal", icon: <HiUserCircle />, label: "Personal" },
          { id: "skill", icon: <MdDashboard />, label: "Skill" },
          { id: "work", icon: <HiClipboardList />, label: "Work" },
          { id: "contacts", icon: <IoMdContact />, label: "Contacts" },
          { id: "projects", icon: <MdDashboard />, label: "Projects" },
          { id: "services", icon: <FaTools />, label: "Services" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
              ${
                activeTab === tab.id
                  ? "bg-color-primary text-white shadow-md"
                  : "bg-gray-200 text-gray-600 hover:bg-indigo-100"
              }`}
          >
            <span className="text-lg">{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6 p-4">
        {activeTab === "personal" && (
          <div className="grid gap-4">
            <div>
              <label className="block font-medium text-gray-700">Hired Date</label>
              <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block font-medium text-gray-700">About</label>
              <textarea className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Email</label>
              <input type="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Phone Number</label>
              <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
        )}

        {activeTab === "skill" && <SkillForm />}
        {activeTab === "work" && <WeForm />}
        {activeTab === "contacts" && <ContactForm />}
        {activeTab === "projects" && <ProjectForm />}
        {activeTab === "services" && <ServiceForm />}
      </div>
    </div>
  );
}
