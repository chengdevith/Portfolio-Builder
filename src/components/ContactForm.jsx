import React, { useState } from "react";
import { useAddContactMutation } from "../redux/services/contactSlide";
import { s } from "framer-motion/client";

function ContactForm() {
  const [addNewContact, { isLoading, isError }] = useAddContactMutation();
  const [formData, setFormData] = useState({
    addrss: "",
    contact_email: "",
    phone: "",
    title: "",
    description: "",
  });

  const hadleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e)=>{
      e.preventDefault();
        try{
            const response =await addNewContact(formData).unwrap();
            console.log(response);
            
        }catch(error){
            alert(error)
        }

  }
  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        
        <input
        name="address"
          type="text"
          onChange={hadleChange}
          id="address"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          required
        />
      </div>
      <div className="mb-5">
        
        <input
        name="email_contact"
          type="email"
          onChange={hadleChange}
          id="password"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          required
        />
      </div>
      <div className="mb-5">
        
        <input
        name="phone"
        onChange={hadleChange}
          type="password"
          id="repeat-password"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          required
        />
      </div>
     
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Register new account
      </button>
    </form>
  );
}

export default ContactForm;
