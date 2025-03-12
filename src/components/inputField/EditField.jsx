import { useState } from "react";
import { HiUserCircle, HiClipboardList } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FileInput, Label, Tabs } from "flowbite-react";
import ContactForm from "./ContactForm";
import ProjectForm from "../inputField/ProjectForm";
import ServiceForm from "../inputField/ServiceForm";
import { useAddSkillMutation } from "../../redux/services/skillSlice";
import {
  useGetFileQuery,
  useUploadFileMutation,
} from "../../redux/services/fileUploadApi";
import {
  useAddContactMutation,
  useGetContactQuery,
} from "../../redux/services/contactSlice";
import { useAddProjectMutation } from "../../redux/services/projectSlice";
import { useAddServiceMutation } from "../../redux/services/serviceSlice";
import FolioComponents3 from "../portfolioCompoenets/FolioComponents3";
export function EditField() {
  const [activeTab, setActiveTab] = useState("personal");
  //api
  const [addNewSkill, { isLoading, isError }] = useAddSkillMutation();
  const [uploadFile] = useUploadFileMutation();
  const [addNewConact, { isLoading: contactLoding }] = useAddContactMutation();
  const [addNewProject, { isLoading: projectLoading }] =
    useAddProjectMutation();
  const [addNewService, { isLoading: serviceLoading }] =
    useAddServiceMutation();
  //props
  const [formSkill, setFormSkill] = useState({
    title: "",
    description: "",
    images: [],
  });
  const [weForm, setWeForm] = useState({
    job_title: "",
    hired_date: "",
    achievements: "",
    job_description: "",
    position: "",
    responsibility: "",
    work_address: "",
    company_name: "",
  });
  const [formData, setFormData] = useState({
    address: "",
    contact_email: "",
    phone: "",
    title: "",
    description: "",
  });
  const [formProject, setFormProject] = useState({
    project_title: "",
    project_description: "",
    link_to_project: "",
    project_image: "",
  });
  const [formService, setFormService] = useState({
    service_title: "",
    service_description: "",
    images: [],
  });

  //handleChange
  const handleChange = (e) => {
    setFormSkill({ ...formSkill, [e.target.name]: e.target.value });
    setWeForm({ ...weForm, [e.target.name]: e.target.value });
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormProject({ ...formProject, [e.target.name]: e.target.value });
    setFormService({ ...formService, [e.target.name]: e.target.value });
  };

  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append("file", file);
    });
    try {
      const resp = await uploadFile(formData).unwrap();
      const url = resp.url;
      await addNewSkill({
        ...formSkill,
        images: [url],
      }).unwrap();
      await addNewWorkExperience(weForm).unwrap();
      await addNewConact(formData).unwrap();
      await addNewService({ ...formService, images: [url] }).unwrap();
      await addNewService({ ...formService, images: [url] }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    setSelectedFiles(files);
    console.log(selectedFiles);
  };
  return (
    <section className="grid grid-cols-6 ">
      <section className="max-w-4xl mx-auto p-6 bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl col-span-2">
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
                <label className="block font-medium text-gray-700">
                  Hired Date
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">About</label>
                <textarea className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          )}

          {activeTab === "skill" && (
            <form
              className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-bold text-color-primary mb-4">
                Create Skill
              </h2>
              <div className="flex w-full items-center justify-center">
                <Label
                  htmlFor="skill-file"
                  className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <FileInput
                    id="skill-file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </Label>
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Title
                </label>
                <input
                  value={formSkill.title}
                  onChange={handleChange}
                  name="title"
                  type="text"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Description
                </label>
                <input
                  onChange={handleChange}
                  value={formSkill.description}
                  name="description"
                  type="text"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full !bg-color-secondary !text-white p-2 rounded hover:!bg-opacity-90"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Create Blog"}
              </button>
            </form>
          )}
          {activeTab === "work" && (
            <form
              className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-bold text-color-primary mb-4">
                Create Work Experience
              </h2>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Job
                </label>
                <input
                  name="job_title"
                  type="text"
                  value={weForm.job_title}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-[#875AFA]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Hired Date
                </label>
                <input
                  name="hired_date"
                  type="datetime-local"
                  value={weForm.hired_date}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-[#875AFA]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Achievements
                </label>
                <input
                  name="achievements"
                  type="text"
                  value={weForm.achievements}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Job Description
                </label>
                <textarea
                  name="job_description"
                  type="text"
                  value={weForm.job_description}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                  rows={3}
                />
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Postision
                </label>
                <input
                  name="position"
                  type="text"
                  value={weForm.position}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Responsibility
                </label>
                <input
                  name="responsibility"
                  type="text"
                  value={weForm.responsibility}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Work Address
                </label>
                <input
                  name="work_address"
                  type="text"
                  value={weForm.work_address}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Company Name
                </label>
                <input
                  name="company_name"
                  type="text"
                  value={weForm.company_name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full !bg-color-secondary !text-white p-2 rounded hover:!bg-opacity-90"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Create Work Experience"}
              </button>
            </form>
          )}
          {activeTab === "contacts" && (
            <form
              className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-bold text-color-primary mb-4">
                Create Contact
              </h2>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Address
                </label>
                <input
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-[#875AFA]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Email
                </label>
                <input
                  name="contact_email"
                  type="email"
                  value={formData.contact_email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-[#875AFA]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Phone
                </label>
                <input
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Title
                </label>
                <input
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full !bg-color-secondary !text-white p-2 rounded hover:!bg-opacity-90"
                disabled={contactLoding}
              >
                {contactLoding ? "submiting..." : "Create Contact"}
              </button>
            </form>
          )}
          {activeTab === "projects" && (
            <form
              className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-bold text-color-primary mb-4">
                Create Project
              </h2>
              <div className="flex w-full items-center justify-center">
                <Label
                  htmlFor="project-file"
                  className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <FileInput
                    id="project-file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </Label>
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  project title
                </label>
                <input
                  value={formProject.project_title}
                  onChange={handleChange}
                  name="project_title"
                  type="text"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Project description
                </label>
                <input
                  onChange={handleChange}
                  value={formProject.project_description}
                  name="project_description"
                  type="text"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Link to project
                </label>
                <input
                  onChange={handleChange}
                  value={formProject.link_to_project}
                  name="link_to_project"
                  type="text"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full !bg-color-secondary !text-white p-2 rounded hover:!bg-opacity-90"
                disabled={projectLoading}
              >
                {projectLoading ? "Submitting..." : "Create Project"}
              </button>
            </form>
          )}
          {activeTab === "services" && (
            <form
              className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-bold text-color-primary mb-4">
                Create Service
              </h2>
              <div className="flex w-full items-center justify-center">
                <Label
                  htmlFor="service-file"
                  className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <FileInput
                    id="service-file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </Label>
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Title
                </label>
                <input
                  value={formService.service_title}
                  onChange={handleChange}
                  name="service_title"
                  type="text"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Description
                </label>
                <input
                  onChange={handleChange}
                  value={formService.service_description}
                  name="service_description"
                  type="text"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full !bg-color-secondary !text-white p-2 rounded hover:!bg-opacity-90"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Create Blog"}
              </button>
            </form>
          )}
        </div>
      </section>
      <section className="col-span-4 overflow-y-auto h-screen">
        <FolioComponents3
          skillTitle={formSkill.title}
          skillDes={formSkill.description}
          job={weForm.job_title}
          hireDate={weForm.hired_date}
          jobDes={weForm.job_description}
          responsibility={weForm.responsibility}
          achievements={weForm.achievements}
          projectTitle={formProject.project_title}
          projectescription={formProject.project_description}
          serviceTitle={formService.service_title}
          serviceDescription={formService.service_description}
        />
      </section>
    </section>
  );
}
