
import { useState } from "react";
import { FileInput, Label } from "flowbite-react";
import { useGetFileQuery, useUploadFileMutation } from "../../redux/services/fileUploadApi";
import { useAddSkillMutation } from "../../redux/services/skillSlice";

function MultpleSkill() {
  const [uploadFile] = useUploadFileMutation();
  const [addNewSkill, { isLoading }] = useAddSkillMutation();
  const { data: image } = useGetFileQuery();

  // Skill list state
  const [skills, setSkills] = useState([
    {id:1, title: "", description: "", images: [] },
  ]);

  // Handle input change
  const handleChange = (id, e) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, [e.target.name]: e.target.value } : skill
      )
    );
  };

  // Handle file upload
  const handleFileChange = async (id, e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const resp = await uploadFile(formData).unwrap();
      const url = resp.url;

      setSkills(
        skills.map((skill) =>
          skill.id === id ? { ...skill, images: [url] } : skill
        )
      );
    } catch (error) {
      console.error("File upload error:", error);
    }
  };

  // Add new skill
  const addSkill = () => {
    setSkills([
      ...skills,
      { id: skills.length + 1, title: "", description: "", images: [] },
    ]);
  };

  // Remove a skill
  const removeSkill = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Promise.all(
        skills.map(async (skill) => {
          await addNewSkill(skill).unwrap();
        })
      );
      console.log("Skills added:", skills);
    } catch (error) {
      console.error("Error adding skills:", error);
    }
  };

  return (
    <form
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-color-primary mb-4">
        Manage Skills
      </h2>

      {skills.map((skill, index) => (
        <div key={skill.id} className="border p-4 mb-4 rounded-lg relative">
          <h3 className="text-lg font-bold mb-2">Skill {index + 1}</h3>

          {/* File Upload */}
          <div className="flex w-full items-center justify-center">
            <Label
              htmlFor={`skill-file-${skill.id}`}
              className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
            >
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              <FileInput
                id={`skill-file-${skill.id}`}
                className="hidden"
                onChange={(e) => handleFileChange(skill.id, e)}
              />
            </Label>
          </div>

          {/* Title */}
          <div className="mb-4">
            <label className="block text-color-primary font-medium">Title</label>
            <input
              value={skill.title}
              onChange={(e) => handleChange(skill.id, e)}
              name="title"
              type="text"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-color-primary font-medium">Description</label>
            <input
              onChange={(e) => handleChange(skill.id, e)}
              value={skill.description}
              name="description"
              type="text"
              className="w-full p-2 border rounded"
              required
            />
          </div>



          {/* Delete Skill */}
          <button
            type="button"
            onClick={() => removeSkill(skill.id)}
            className="absolute top-1 right-4 !bg-red-500 !text-white px-2 py-1  rounded"
          >
            🗑
          </button>
        </div>
      ))}

      {/* Add Skill */}
      <button
        type="button"
        onClick={addSkill}
        className="mb-4 px-4 py-2 !bg-blue-500 !text-white rounded"
      >
        + Add Skill
      </button>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full !bg-color-secondary !text-white p-2 rounded"
        disabled={isLoading}
      >
        {isLoading ? "Submitting..." : "Save Skills"}
      </button>
    </form>
  );
}

export default MultpleSkill;