import React, { useState } from "react";
import { useAddWorkExperienceMutation } from "../../redux/services/weSlice";

function WeForm() {
  const [addNewWorkExperience, { isLoading, isError }] =
    useAddWorkExperienceMutation();
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await addNewWorkExperience(weForm).unwrap();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setWeForm({ ...weForm, [e.target.name]: e.target.value });
  };
  return (
    <form
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-color-primary mb-4">
        Create Work Experience
      </h2>
      <div className="mb-4">
        <label className="block text-color-primary font-medium">Job</label>
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
  );
}

export default WeForm;
