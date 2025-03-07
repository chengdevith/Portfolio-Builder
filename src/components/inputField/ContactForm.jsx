import React, { useState } from "react";
import { useAddContactMutation, useGetContactQuery } from "../../redux/services/contactSlice";

function ContactForm() {
  console.log(getcontacts)
  const [formData, setFormData] = useState({
    address: "",
    contact_email: "",
    phone: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addNewContact(formData).unwrap();
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <form className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-color-primary mb-4">Create Contact</h2>
      <div className="mb-4">
        <label className="block text-color-primary font-medium">Address</label>
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
        <label className="block text-color-primary font-medium">Email</label>
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
        <label className="block text-color-primary font-medium">Phone</label>
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
        <label className="block text-color-primary font-medium">Title</label>
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
        <label className="block text-color-primary font-medium">Description</label>
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
        className="w-full bg-color-secondary text-white p-2 rounded hover:bg-opacity-90"
        disabled={isLoading}
      >
        {isLoading ? "Submitting..." : "Create Contact"}
      </button>
    </form>
  );
}

export default ContactForm;
