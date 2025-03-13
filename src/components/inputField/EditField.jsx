import { useState, useEffect } from "react";
import { HiUserCircle, HiClipboardList } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { IoMdContact } from "react-icons/io";
import FolioComponents3 from "../portfolioCompoenets/FolioComponents3";
import { FileInput, Label } from "flowbite-react";
import {
  useGetFileQuery,
  useUploadFileMutation,
} from "../../redux/services/fileUploadApi";
import { useAddSkillMutation } from "../../redux/services/skillSlice";
import { useAddWorkExperienceMutation } from "../../redux/services/weSlice";
import {
  useAddContactMutation,
  useGetContactQuery,
} from "../../redux/services/contactSlice";
import { useAddProjectMutation } from "../../redux/services/projectSlice";
import { useAddServiceMutation } from "../../redux/services/serviceSlice";
import { useAddBlogMutation } from "../../redux/services/blogSlice";

export default function EditFiel() {
  const [activeTab, setActiveTab] = useState("personal");

  //SelectFiles
  const [selectedSkillFiles, setSelectedSkillFiles] = useState([]);
  const [selectedProFiles, setSelectedProFiles] = useState([]);
  const [selectedServiceFiles, setSelectedServiceFiles] = useState([]);
  const [selectedBlogFiles, setSelectedBlogFiles] = useState([]);

  // Preview URLs state
  const [skillPreviewUrls, setSkillPreviewUrls] = useState([]);
  const [proPreviewUrls, setProPreviewUrls] = useState([]);
  const [servicePreviewUrls, setServicePreviewUrls] = useState([]);
  const [blogPreviewUrls, setBlogPreviewUrls] = useState([]);

  //uploadfile
  const [uploadSkillFile] = useUploadFileMutation();
  const [uploadProFile] = useUploadFileMutation();
  const [uploadServiceFile] = useUploadFileMutation();
  const [uploadBlogFile] = useUploadFileMutation();

  //api
  const [addNewSkill, { isLoading: loadingSkill }] = useAddSkillMutation();
  const [addNewWorkExperience, { isLoading: loadingWe }] =
    useAddWorkExperienceMutation();
  const [addNewConact, { isLoading: loadingContact }] = useAddContactMutation();
  const [addNewProject, { loadingPro }] = useAddProjectMutation();
  const [addNewService, { isLoading: loadingService }] =
    useAddServiceMutation();
  const [addNewBlog, { isLoading: loadingBlog }] = useAddBlogMutation();

  //form
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
    project_image: [],
  });
  const [formService, setFormService] = useState({
    title: "",
    description: "",
    images: [],
  });
  const [formBlog, setFormBlog] = useState({
    title: "",
    description: "",
    images: [],
  });

  //handleChange
  const handleChangeSkill = (e) => {
    setFormSkill({ ...formSkill, [e.target.name]: e.target.value });
  };
  const handleChangeWe = (e) => {
    setWeForm({ ...weForm, [e.target.name]: e.target.value });
  };
  const handleChangeContact = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleChangePro = (e) => {
    setFormProject({ ...formProject, [e.target.name]: e.target.value });
  };
  const handleChangeService = (e) => {
    setFormService({ ...formService, [e.target.name]: e.target.value });
  };
  const handleBlogChange = (e) => {
    setFormBlog({ ...formBlog, [e.target.name]: e.target.value });
  };

  //handleFileChange
  const handleSkillFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedSkillFiles(files);
  };
  const handleProFileChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    setSelectedProFiles(files);
  };
  const handleServiceFileChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    setSelectedServiceFiles(files);
  };
  const handleBlogFileChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    setSelectedBlogFiles(files);
  };

  //handleSubmit
  const handleSkillSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    selectedSkillFiles.forEach((file) => {
      formData.append("file", file);
    });

    try {
      const resp = await uploadSkillFile(formData).unwrap();
      const url = resp.url;
      console.log(url);
      const response = await addNewSkill({
        ...formSkill,
        images: [url],
      }).unwrap();
      console.log(formSkill);
      console.log(response);

      // Clear form and previews after successful submission
      setSelectedSkillFiles([]);
      setPreviewUrls([]);
      setFormSkill({
        title: "",
        description: "",
        images: [],
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmitWe = async (e) => {
    e.preventDefault();
    try {
      const response = await addNewWorkExperience(weForm).unwrap();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmitContact = async (e) => {
    e.preventDefault();
    try {
      const response = await addNewConact(formData).unwrap();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmitPro = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    selectedProFiles.forEach((file) => {
      formData.append("file", file);
    });
    try {
      const resp = await uploadProFile(formData).unwrap();
      console.log(resp.url);
      const url = resp.url;
      const response = await addNewProject({
        ...formProject,
        project_image: url,
      }).unwrap();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmitService = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    selectedServiceFiles.forEach((file) => {
      formData.append("file", file);
    });
    try {
      const resp = await uploadServiceFile(formData).unwrap();
      console.log(resp.url);
      const url = resp.url;
      const response = await addNewService({
        ...formService,
        images: [url],
      }).unwrap();
      console.log(response);
    } catch (error) {
      alert(error);
    }
  };
  const handleSubmitBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    selectedBlogFiles.forEach((file) => {
      formData.append("file", file);
    });
    try {
      const resp = await uploadBlogFile(formData).unwrap();
      console.log(resp.url);
      const url = resp.url;
      const response = await addNewBlog({
        ...formBlog,
        images: [url],
      }).unwrap();
      console.log(response);
    } catch (error) {
      alert(error);
    }
  };

  // Generate preview URLs when files are selected
  useEffect(() => {
    if (selectedSkillFiles.length > 0) {
      const newPreviewUrls = selectedSkillFiles.map((file) =>
        URL.createObjectURL(file)
      );
      setSkillPreviewUrls(newPreviewUrls);

      // Cleanup function to revoke object URLs when component unmounts or files change
      return () => {
        newPreviewUrls.forEach((url) => URL.revokeObjectURL(url));
      };
    }
  }, [selectedSkillFiles]);
  useEffect(() => {
    if (selectedProFiles.length > 0) {
      const newPreviewUrls = selectedProFiles.map((file) =>
        URL.createObjectURL(file)
      );
      setProPreviewUrls(newPreviewUrls);

      // Cleanup function to revoke object URLs when component unmounts or files change
      return () => {
        newPreviewUrls.forEach((url) => URL.revokeObjectURL(url));
      };
    }
  }, [selectedProFiles]);
  useEffect(() => {
    if (selectedServiceFiles.length > 0) {
      const newPreviewUrls = selectedServiceFiles.map((file) =>
        URL.createObjectURL(file)
      );
      setServicePreviewUrls(newPreviewUrls);

      // Cleanup function to revoke object URLs when component unmounts or files change
      return () => {
        newPreviewUrls.forEach((url) => URL.revokeObjectURL(url));
      };
    }
  }, [selectedServiceFiles]);
  useEffect(() => {
    if (selectedBlogFiles.length > 0) {
      const newPreviewUrls = selectedBlogFiles.map((file) =>
        URL.createObjectURL(file)
      );
      setBlogPreviewUrls(newPreviewUrls);

      // Cleanup function to revoke object URLs when component unmounts or files change
      return () => {
        newPreviewUrls.forEach((url) => URL.revokeObjectURL(url));
      };
    }
  }, [selectedBlogFiles]);

  return (
    <section className="grid grid-cols-6">
      <section className="max-w-4xl p-6 bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl flex col-span-2">
        {/* Tab Header */}
        <div className="flex flex-col items-start gap-4 bg-gray-100 rounded-xl p-4 w-fit">
          {[
            { id: "personal", icon: <HiUserCircle />, label: "Personal" },
            { id: "skill", icon: <MdDashboard />, label: "Skill" },
            { id: "work", icon: <HiClipboardList />, label: "Work" },
            { id: "contacts", icon: <IoMdContact />, label: "Contacts" },
            { id: "projects", icon: <MdDashboard />, label: "Projects" },
            { id: "services", icon: <FaTools />, label: "Services" },
            { id: "blog", icon: <LuNotebookPen />, label: "blog" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 w-full
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
        <div className="p-4 flex-1">
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
              onSubmit={handleSkillSubmit}
            >
              <h2 className="text-2xl font-bold text-color-primary mb-4">
                Create Skill
              </h2>
              <div className="flex w-full items-center justify-center">
                <Label
                  htmlFor="skill-file"
                  className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  {skillPreviewUrls.length > 0 ? (
                    <div className="flex flex-wrap gap-2 p-2 justify-center">
                      {skillPreviewUrls.map((url, index) => (
                        <div key={index} className="relative">
                          <img
                            src={url}
                            alt={`Preview ${index}`}
                            className="h-40 w-40 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              const newFiles = [...selectedSkillFiles];
                              newFiles.splice(index, 1);
                              setSelectedSkillFiles(newFiles);
                              const newUrls = [...skillPreviewUrls];
                              URL.revokeObjectURL(newUrls[index]);
                              newUrls.splice(index, 1);
                              setSkillPreviewUrls(newUrls);
                            }}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
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
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                  )}
                  <FileInput
                    id="skill-file"
                    className="hidden"
                    onChange={handleSkillFileChange}
                    multiple
                  />
                </Label>
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Title
                </label>
                <input
                  value={formSkill.title}
                  onChange={handleChangeSkill}
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
                  onChange={handleChangeSkill}
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
                disabled={loadingSkill}
              >
                {loadingSkill ? "Submitting..." : "Create Blog"}
              </button>
            </form>
          )}
          {activeTab === "work" && (
            <form
              className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
              onSubmit={handleSubmitWe}
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
                  onChange={handleChangeWe}
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
                  onChange={handleChangeWe}
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
                  onChange={handleChangeWe}
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
                  onChange={handleChangeWe}
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
                  onChange={handleChangeWe}
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
                  onChange={handleChangeWe}
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
                  onChange={handleChangeWe}
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
                  onChange={handleChangeWe}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full !bg-color-secondary !text-white p-2 rounded hover:!bg-opacity-90"
                disabled={loadingWe}
              >
                {loadingWe ? "Submitting..." : "Create Work Experience"}
              </button>
            </form>
          )}
          {activeTab === "contacts" && (
            <form
              className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
              onSubmit={handleSubmitContact}
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
                  onChange={handleChangeContact}
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
                  onChange={handleChangeContact}
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
                  onChange={handleChangeContact}
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
                  onChange={handleChangeContact}
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
                  onChange={handleChangeContact}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full !bg-color-secondary !text-white p-2 rounded hover:!bg-opacity-90"
                disabled={loadingContact}
              >
                {loadingContact ? "submiting..." : "Create Contact"}
              </button>
            </form>
          )}
          {activeTab === "projects" && (
            <form
              className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
              onSubmit={handleSubmitPro}
            >
              <h2 className="text-2xl font-bold text-color-primary mb-4">
                Create Project
              </h2>
              <div className="flex w-full items-center justify-center">
                <Label
                  htmlFor="project-file"
                  className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  {proPreviewUrls ? ( // Assuming projectPreviewUrl is a single URL (string), not an array
                    <div className="flex flex-wrap gap-2 p-2 justify-center">
                      <div className="relative">
                        <img
                          src={proPreviewUrls}
                          alt="Project Preview"
                          className="h-40 w-40 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setProPreviewUrls(null); // Reset the selected file
                            URL.revokeObjectURL(proPreviewUrls); // Clean up the URL
                            setProPreviewUrls(null); // Reset the preview URL
                          }}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ) : (
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
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                  )}
                  <FileInput
                    id="project-file"
                    className="hidden"
                    onChange={handleProFileChange}
                  />
                </Label>
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Project Title
                </label>
                <input
                  value={formProject.project_title}
                  onChange={handleChangePro}
                  name="project_title"
                  type="text"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Project Description
                </label>
                <input
                  onChange={handleChangePro}
                  value={formProject.project_description}
                  name="project_description"
                  type="text"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Link to Project
                </label>
                <input
                  onChange={handleChangePro}
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
                disabled={loadingPro}
              >
                {loadingPro ? "Submitting..." : "Create Project"}
              </button>
            </form>
          )}
          {activeTab === "services" && (
            <form
              className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
              onSubmit={handleSubmitService}
            >
              <h2 className="text-2xl font-bold text-color-primary mb-4">
                Create Service
              </h2>
              <div className="flex w-full items-center justify-center">
                <Label
                  htmlFor="service-file"
                  className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  {servicePreviewUrls ? ( // Single preview URL
                    <div className="flex flex-wrap gap-2 p-2 justify-center">
                      <div className="relative">
                        <img
                          src={servicePreviewUrls}
                          alt="Service Preview"
                          className="h-40 w-40 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setServicePreviewUrls(null); // Reset the selected file
                            URL.revokeObjectURL(servicePreviewUrls); // Clean up the URL
                            setServicePreviewUrls(null); // Reset the preview URL
                          }}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ) : (
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
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                  )}
                  <FileInput
                    id="service-file"
                    className="hidden"
                    onChange={handleServiceFileChange}
                  />
                </Label>
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Title
                </label>
                <input
                  value={formService.title}
                  onChange={handleChangeService}
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
                  onChange={handleChangeService}
                  value={formService.description}
                  name="description"
                  type="text"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full !bg-color-secondary !text-white p-2 rounded hover:!bg-opacity-90"
                disabled={loadingService}
              >
                {loadingService ? "Submitting..." : "Create Service"}{" "}
                {/* Fixed button text */}
              </button>
            </form>
          )}
          {activeTab === "blog" && (
            <form
              className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
              onSubmit={handleSubmitBlog}
            >
              <div className="flex w-full items-center justify-center">
                <Label
                  htmlFor="dropzone-file"
                  className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  {blogPreviewUrls ? ( // Single preview URL
                    <div className="flex flex-wrap gap-2 p-2 justify-center">
                      <div className="relative">
                        <img
                          src={blogPreviewUrls}
                          alt="Blog Preview"
                          className="h-40 w-40 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setBlogPreviewUrls(null); // Reset the selected file
                            URL.revokeObjectURL(blogPreviewUrls); // Clean up the URL
                            setBlogPreviewUrls(null); // Reset the preview URL
                          }}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ) : (
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
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                  )}
                  <FileInput
                    id="dropzone-file"
                    className="hidden"
                    onChange={handleBlogFileChange}
                  />
                </Label>
              </div>
              <div className="mb-4">
                <label className="block text-color-primary font-medium">
                  Title
                </label>
                <input
                  value={formBlog.title}
                  onChange={handleBlogChange}
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
                  onChange={handleBlogChange}
                  value={formBlog.description}
                  name="description"
                  type="text"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-color-secondary text-white p-2 rounded hover:bg-opacity-90"
                disabled={loadingBlog}
              >
                {loadingBlog ? "Submitting..." : "Create Blog"}
              </button>
            </form>
          )}
        </div>
      </section>
      <section className="col-span-4 h-screen overflow-y-auto">
        <FolioComponents3
          skillTitle={formSkill.title}
          skillDes={formSkill.description}
          skillImg={
            skillPreviewUrls.length > 0 ? skillPreviewUrls : formSkill.images
          }
          job={weForm.job_title}
          companyName={weForm.company_name}
          hireDate={weForm.hired_date}
          jobDes={weForm.job_description}
          responsibility={weForm.responsibility}
          achievements={weForm.achievements}
          contactDescription={formData.description}
          contactsTitle={formData.title}
          contactsAddress={formData.address}
          contactEmail={formData.contact_email}
          contactPhone={formData.phone}
          projectImage={
            proPreviewUrls.length > 0
              ? proPreviewUrls
              : formProject.project_image
          }
          projectLink={formProject.link_to_project}
          projectTitle={formProject.project_title}
          projectescription={formProject.project_description}
          serviceImage={
            servicePreviewUrls.length > 0
              ? servicePreviewUrls
              : formService.images
          }
          serviceTitle={formService.title}
          serviceDescription={formService.description}
          blogImage={
            blogPreviewUrls.length > 0 ? blogPreviewUrls : formBlog.images
          }
          blogTitle={formBlog.title}
          blogDescription={formBlog.description}
        />
      </section>
    </section>
  );
}
