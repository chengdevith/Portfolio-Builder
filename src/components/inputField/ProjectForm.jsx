import { useState } from "react";
import { FileInput, Label } from "flowbite-react";
import { useGetFileQuery, useUploadFileMutation } from "../../redux/services/fileUploadApi";
import { useAddProjectMutation } from "../../redux/services/projectSlice";

function SkillForm() {
 const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadFile] = useUploadFileMutation();
  const [addNewProject, { isLoading, isError }] = useAddProjectMutation();
  const { data: image } = useGetFileQuery();
  const [formProject, setFormProject] = useState({
    project_title: "",
    project_description: "",
    link_to_project: "",
    project_image: ""
  });

  const handleChange = (e) => {
    setFormProject({ ...formProject, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    setSelectedFiles(files);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append("file", file);
    });
    try {
      const resp = await uploadFile(formData).unwrap();
      console.log(resp.url)
      const url = resp.url;
      const response = await addNewProject({ ...formProject, project_image: url }).unwrap();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
                <span className="font-semibold">Click to upload</span> or drag
                and drop
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
          <label className="block text-color-primary font-medium">project title</label>
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
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Create Project"}
        </button>
      </form>
    </>
  );
}

export default SkillForm;
