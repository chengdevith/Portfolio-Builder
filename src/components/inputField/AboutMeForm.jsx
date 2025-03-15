import React, { useState } from "react";
import { Label, FileInput } from "flowbite-react";
import { useAddAboutMeMutation } from "../../redux/services/aboutMeSlice";
import { useUploadFileMutation } from "../../redux/services/fileUploadApi";

const FormInput = () => {
  const [selectedFIlesAboutMe, setSelectedFilesAboutMe] = useState([]);
  const [uploadAboutmeFile] = useUploadFileMutation();
  const [addNewAboutMe, { isLoading, isError }] = useAddAboutMeMutation();
  const [AboutMeForm, setAboutMeForm] = useState({
    images: [{ url: "", alt: "" }],
    titles: [{ key: "", subtitle: "" }],
    descriptions: [{ key: "", long: "" }],
    personal_info: {
      first_name: "",
      last_name: "",
      gender: "",
      date_of_birth: "",
      job: "",
      languages: "",
      experience: "",
      contacts: [{ type: "", value: "" }],
      address: { street: "", city: "", state: "", zip: "", country: "" },
      social_media: [{ platform: "", url: "" }],
    },
  });

  const handleChangeAboutMe = (e) => {
    const { name, value } = e.target;
    // Handle nested objects
    const [parent, child, grandChild] = name.split('.');
    
    if (grandChild) {
      setAboutMeForm(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: Array.isArray(prev[parent][child])
            ? [{ ...prev[parent][child][0], [grandChild]: value }]
            : { ...prev[parent][child], [grandChild]: value }
        }
      }));
    } else if (child) {
      setAboutMeForm(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setAboutMeForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChangeAboutMe = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    setSelectedFilesAboutMe(files);
  };

  const handleSubmitAboutMe = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    selectedFIlesAboutMe.forEach((file) => {
      formData.append("file", file);
    });

    try {
      const resp = await uploadAboutmeFile(formData).unwrap();
      console.log(resp.url);
      const url = resp.url;
      const updatedForm = {
        ...AboutMeForm,
        images: [{ ...AboutMeForm.images[0], url }]
      };
      const response = await addNewAboutMe(updatedForm).unwrap();
      console.log(response);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <form
        className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
        onSubmit={handleSubmitAboutMe}
      >
        <div className="flex w-full items-center justify-center">
          <Label
            htmlFor="dropzone-file"
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
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h5.167M10 15V6m0 0L8 8m2-2 2 2"
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
              id="dropzone-file"
              className="hidden"
              onChange={handleFileChangeAboutMe}
              multiple // Add this if you want to allow multiple file uploads
            />
          </Label>
        </div>
        
        <h5 className="font-bold text-color-primary mb-4">Personal Information</h5>
        <div className="grid grid-cols-2 gap-4">
          <input
            value={AboutMeForm.personal_info.first_name}
            name="personal_info.first_name"
            type="text"
            placeholder="First Name"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
            onChange={handleChangeAboutMe}
          />
          <input
            value={AboutMeForm.personal_info.last_name}
            name="personal_info.last_name"
            type="text"
            placeholder="Last Name"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
            onChange={handleChangeAboutMe}
          />
          <input
            value={AboutMeForm.personal_info.gender}
            name="personal_info.gender"
            type="text"
            placeholder="Gender"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
            onChange={handleChangeAboutMe}
          />
          <input
            value={AboutMeForm.personal_info.date_of_birth}
            name="personal_info.date_of_birth"
            type="date"
            placeholder="Date of Birth"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
            onChange={handleChangeAboutMe}
          />
          <input
            value={AboutMeForm.personal_info.job}
            name="personal_info.job"
            type="text"
            placeholder="Job"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
            onChange={handleChangeAboutMe}
          />
          <input
            value={AboutMeForm.personal_info.languages}
            name="personal_info.languages"
            type="text"
            placeholder="Languages"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
            onChange={handleChangeAboutMe}
          />
        </div>

        <h5 className="font-bold text-color-primary mb-4">Contact</h5>
        <div className="grid grid-cols-2 gap-4">
          <input
            value={AboutMeForm.personal_info.contacts[0].type}
            name="personal_info.contacts.type"
            type="text"
            placeholder="Contact Type"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
            onChange={handleChangeAboutMe}
          />
          <input
            value={AboutMeForm.personal_info.contacts[0].value}
            name="personal_info.contacts.value"
            type="text"
            placeholder="Contact Value"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
            onChange={handleChangeAboutMe}
          />
        </div>

        <h5 className="font-bold text-color-primary mb-4">Address</h5>
        <div className="grid grid-cols-2 gap-4">
          <input
            value={AboutMeForm.personal_info.address.street}
            name="personal_info.address.street"
            type="text"
            placeholder="Street"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
            onChange={handleChangeAboutMe}
          />
          <input
            value={AboutMeForm.personal_info.address.city}
            name="personal_info.address.city"
            type="text"
            placeholder="City"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
            onChange={handleChangeAboutMe}
          />
          <input
            value={AboutMeForm.personal_info.address.state}
            name="personal_info.address.state"
            type="text"
            placeholder="State"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
            onChange={handleChangeAboutMe}
          />
          <input
            value={AboutMeForm.personal_info.address.zip}
            name="personal_info.address.zip"
            type="text"
            placeholder="ZIP Code"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
            onChange={handleChangeAboutMe}
          />
          <input
            value={AboutMeForm.personal_info.address.country}
            name="personal_info.address.country"
            type="text"
            placeholder="Country"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
            onChange={handleChangeAboutMe}
          />
        </div>

        <h5 className="font-bold text-color-primary my-2">Social Media</h5>
        <div className="grid grid-cols-2 gap-4">
          <input
            value={AboutMeForm.personal_info.social_media[0].platform}
            name="personal_info.social_media.platform"
            type="text"
            placeholder="Platform"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
            onChange={handleChangeAboutMe}
          />
          <input
            value={AboutMeForm.personal_info.social_media[0].url}
            name="personal_info.social_media.url"
            type="text"
            placeholder="URL"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-color-primary"
            onChange={handleChangeAboutMe}
          />
        </div>
        
        <button
          type="submit"
          className="mt-4 w-full !bg-color-secondary !text-white p-2 rounded hover:!bg-opacity-90"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Create Blog"}
        </button>
      </form>
    </>
  );
};

export default FormInput;