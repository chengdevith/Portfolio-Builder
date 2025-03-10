import React, { useState } from "react";
import {
  useGetFileQuery,
  useUploadFileMutation,
} from "../../redux/services/fileUploadApi";
function FileUploadComponent() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadFile, { isLoading, isError, error }] = useUploadFileMutation();
  const { data: get } = useGetFileQuery();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    setSelectedFiles(files);
  };

  // Upload files to the API
  const handleUpload = async () => {
    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append("file", file);
    });

    try {
      const response = await uploadFile(formData).unwrap();
      console.log("Files uploaded successfully:", response);
    } catch (error) {
      console.log("Error uploading files:", error);
    }
  };
  console.log(get);
  return (
    <div>
      <input type="file" id="file-upload" onChange={handleFileChange} />

      <button type="button" onClick={handleUpload} disabled={isLoading}>
        {isLoading ? "Uploading..." : "Upload Files"}
      </button>
      {isError && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
}

export default FileUploadComponent;
