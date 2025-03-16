import React from "react";
import { useAddTemplateMutation } from "../services/templateApi";
import Portfolio1 from "../assets/Card_images/Portfolio/Portfolio-1.png";

const UploadTemplate = () => {
  const [addTemplate] = useAddTemplateMutation();

  const handleUpload = async () => {
    try {
      const response = await addTemplate({
        imagePath: Portfolio1,
        title: "Full-Stack Developer",
        category: "Student",
        type: "Portfolio",
      }).unwrap();

      console.log("✅ Upload Success:", response); // Log success response
    } catch (error) {
      console.error("❌ Upload Error:", error); // Log error if failed
    }
  };

  return (
    <div>
      <button onClick={handleUpload}>Upload Template</button>
    </div>
  );
};

export default UploadTemplate;
