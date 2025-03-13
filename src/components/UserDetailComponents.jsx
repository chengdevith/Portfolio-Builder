import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Camera,
  Save,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "../redux/services/authSlice";
import { useUploadFileMutation } from "../redux/services/fileUploadApi";

const UserDetailComponents = () => {
  const { data: profile, isLoading, error } = useGetUserProfileQuery();
  const [updateUserProfile, { isLoading: loadingUp, error: errorUp }] =
    useUpdateUserProfileMutation();
  const [upload, { isLoading: uploading, error: uploadError }] =
    useUploadFileMutation();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Update formData when profile is available
  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  // Handle loading and error states
  if (isLoading) {
    return <div className="text-center py-8">Loading profile...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-600">
        Error loading profile: {error.message}
      </div>
    );
  }

  if (!profile || !formData) {
    return <div className="text-center py-8">No profile data available.</div>;
  }

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle avatar file upload
  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const formDataUpload = new FormData();
      formDataUpload.append("file", file); // Adjust the key ('file') based on your backend API

      const response = await upload(formDataUpload).unwrap();
      const avatarUrl = response.url; // Adjust this based on your API response structure

      setFormData((prev) => ({
        ...prev,
        avatar: avatarUrl,
      }));
      setSuccessMessage("Avatar uploaded successfully!");
      setErrorMessage("");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      setErrorMessage(
        "Failed to upload avatar: " +
          (err?.data?.message || err.message || "Unknown error")
      );
      setSuccessMessage("");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  // Calculate age from date of birth
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Handle form submission with mutation
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(formData).unwrap();
      setIsEditing(false);
      setSuccessMessage("Profile updated successfully!");
      setErrorMessage("");
      setTimeout(() => setSuccessMessage(""), 3000);
      window.location.reload();
    } catch (err) {
      setErrorMessage(
        "Failed to update profile: " +
          (err?.data?.message || err.message || "Unknown error")
      );
      setSuccessMessage("");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  // Handle cancel edit
  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
    setErrorMessage("");
    setSuccessMessage("");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Success message */}
      {successMessage && (
        <div className="max-w-4xl mx-auto mt-4 p-4 bg-green-100 text-green-700 rounded-md flex items-center justify-between">
          <span>{successMessage}</span>
          <button onClick={() => setSuccessMessage("")}>
            <X size={18} />
          </button>
        </div>
      )}

      {/* Error message */}
      {errorMessage && (
        <div className="max-w-4xl mx-auto mt-4 p-4 bg-red-100 text-red-700 rounded-md flex items-center justify-between">
          <span>{errorMessage}</span>
          <button onClick={() => setErrorMessage("")}>
            <X size={18} />
          </button>
        </div>
      )}

      {/* Profile content */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Profile header with cover image */}
          <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 relative">
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="absolute top-4 right-4 bg-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-50 transition duration-200"
                style={{ color: "#875AFA" }}
              >
                Edit Profile
              </button>
            )}
          </div>

          {/* Profile avatar */}
          <div className="flex flex-col items-center -mt-20 pb-6">
            <div className="h-40 w-40 rounded-full border-4 border-white overflow-hidden bg-white shadow-lg relative">
              {formData.avatar ? (
                <img
                  src={formData.avatar}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-purple-200 flex items-center justify-center">
                  <User size={80} className="text-purple-400" />
                </div>
              )}
              {isEditing && (
                <label className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    className="hidden"
                    disabled={uploading}
                  />
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                    <Camera size={18} className="text-purple-600" />
                  </div>
                </label>
              )}
            </div>
            <h2 className="text-2xl font-bold mt-4">
              {formData.first_name} {formData.last_name}
            </h2>
            <p className="text-gray-600">@{formData.username}</p>
          </div>

          {/* Form content */}
          <div className="px-6 pb-8">
            <form onSubmit={handleSubmit}>
              <div className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <User
                      size={20}
                      className="mr-2"
                      style={{ color: "#875AFA" }}
                    />
                    Personal Information
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* First Name */}
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          First Name
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={formData.first_name || ""}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: "#875AFA" }}
                          />
                        ) : (
                          <p className="text-gray-800">{formData.first_name}</p>
                        )}
                      </div>

                      {/* Last Name */}
                      <div>
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Last Name
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={formData.last_name || ""}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: "#875AFA" }}
                          />
                        ) : (
                          <p className="text-gray-800">{formData.last_name}</p>
                        )}
                      </div>

                      {/* Username */}
                      <div>
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Username
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username || ""}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: "#875AFA" }}
                          />
                        ) : (
                          <p className="text-gray-800">@{formData.username}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address
                        </label>
                        {isEditing ? (
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email || ""}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: "#875AFA" }}
                          />
                        ) : (
                          <div className="flex items-center">
                            <Mail size={16} className="text-gray-400 mr-2" />
                            <p className="text-gray-800">{formData.email}</p>
                          </div>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone_number"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            id="phone_number"
                            name="phone_number"
                            value={formData.phone_number || ""}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: "#875AFA" }}
                          />
                        ) : (
                          <div className="flex items-center">
                            <Phone size={16} className="text-gray-400 mr-2" />
                            <p className="text-gray-800">
                              {formData.phone_number}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Address */}
                      <div>
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Address
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address || ""}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: "#875AFA" }}
                          />
                        ) : (
                          <div className="flex items-center">
                            <MapPin size={16} className="text-gray-400 mr-2" />
                            <p className="text-gray-800">{formData.address}</p>
                          </div>
                        )}
                      </div>

                      {/* Gender */}
                      <div>
                        <label
                          htmlFor="gender"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Gender
                        </label>
                        {isEditing ? (
                          <select
                            id="gender"
                            name="gender"
                            value={formData.gender || "M"}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: "#875AFA" }}
                          >
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="O">Other</option>
                          </select>
                        ) : (
                          <p className="text-gray-800">
                            {formData.gender === "M"
                              ? "Male"
                              : formData.gender === "F"
                              ? "Female"
                              : "Other"}
                          </p>
                        )}
                      </div>

                      {/* Date of Birth */}
                      <div>
                        <label
                          htmlFor="dob"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Date of Birth
                        </label>
                        {isEditing ? (
                          <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={formData.dob || ""}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: "#875AFA" }}
                          />
                        ) : (
                          <div className="flex items-center">
                            <Calendar
                              size={16}
                              className="text-gray-400 mr-2"
                            />
                            <p className="text-gray-800">
                              {formatDate(formData.dob)} (
                              {calculateAge(formData.dob)} years old)
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <label
                    htmlFor="bio"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Bio
                  </label>
                  {isEditing ? (
                    <textarea
                      id="bio"
                      name="bio"
                      rows="4"
                      value={formData.bio || ""}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      style={{ outlineColor: "#875AFA" }}
                    />
                  ) : (
                    <p className="text-gray-800">{formData.bio}</p>
                  )}
                </div>

                {/* Social Media Links */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Social Media
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Facebook */}
                    <div>
                      <label
                        htmlFor="facebook"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Facebook
                      </label>
                      {isEditing ? (
                        <div className="flex items-center">
                          <span className="bg-gray-100 px-3 py-2 rounded-l-md border border-r-0 border-gray-300">
                            <Facebook size={16} className="text-blue-600" />
                          </span>
                          <input
                            type="url"
                            id="facebook"
                            name="facebook"
                            value={formData.facebook || ""}
                            onChange={handleChange}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: "#875AFA" }}
                          />
                        </div>
                      ) : (
                        formData.facebook && (
                          <a
                            href={formData.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:underline"
                          >
                            <Facebook size={16} className="mr-2" />
                            <span>Facebook Profile</span>
                          </a>
                        )
                      )}
                    </div>

                    {/* Twitter */}
                    <div>
                      <label
                        htmlFor="twitter"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Twitter
                      </label>
                      {isEditing ? (
                        <div className="flex items-center">
                          <span className="bg-gray-100 px-3 py-2 rounded-l-md border border-r-0 border-gray-300">
                            <Twitter size={16} className="text-blue-400" />
                          </span>
                          <input
                            type="url"
                            id="twitter"
                            name="twitter"
                            value={formData.twitter || ""}
                            onChange={handleChange}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: "#875AFA" }}
                          />
                        </div>
                      ) : (
                        formData.twitter && (
                          <a
                            href={formData.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-400 hover:underline"
                          >
                            <Twitter size={16} className="mr-2" />
                            <span>Twitter Profile</span>
                          </a>
                        )
                      )}
                    </div>

                    {/* Instagram */}
                    <div>
                      <label
                        htmlFor="instagram"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Instagram
                      </label>
                      {isEditing ? (
                        <div className="flex items-center">
                          <span className="bg-gray-100 px-3 py-2 rounded-l-md border border-r-0 border-gray-300">
                            <Instagram size={16} className="text-pink-600" />
                          </span>
                          <input
                            type="url"
                            id="instagram"
                            name="instagram"
                            value={formData.instagram || ""}
                            onChange={handleChange}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: "#875AFA" }}
                          />
                        </div>
                      ) : (
                        formData.instagram && (
                          <a
                            href={formData.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-pink-600 hover:underline"
                          >
                            <Instagram size={16} className="mr-2" />
                            <span>Instagram Profile</span>
                          </a>
                        )
                      )}
                    </div>

                    {/* LinkedIn */}
                    <div>
                      <label
                        htmlFor="linkedin"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        LinkedIn
                      </label>
                      {isEditing ? (
                        <div className="flex items-center">
                          <span className="bg-gray-100 px-3 py-2 rounded-l-md border border-r-0 border-gray-300">
                            <Linkedin size={16} className="text-blue-700" />
                          </span>
                          <input
                            type="url"
                            id="linkedin"
                            name="linkedin"
                            value={formData.linkedin || ""}
                            onChange={handleChange}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: "#875AFA" }}
                          />
                        </div>
                      ) : (
                        formData.linkedin && (
                          <a
                            href={formData.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-700 hover:underline"
                          >
                            <Linkedin size={16} className="mr-2" />
                            <span>LinkedIn Profile</span>
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Form buttons */}
                {isEditing && (
                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none disabled:opacity-50"
                      disabled={loadingUp || uploading}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-md shadow-sm text-white flex items-center disabled:opacity-50"
                      style={{ backgroundColor: "#875AFA" }}
                      disabled={loadingUp || uploading}
                    >
                      <Save size={18} className="mr-2" />
                      {loadingUp ? "Saving..." : "Save Changes"}
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailComponents;
