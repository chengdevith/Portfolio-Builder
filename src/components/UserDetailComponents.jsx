import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Camera, Save, X, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const UserDetailComponents = () => {
  // Sample user data structure matching your API
  const [userData, setUserData] = useState({
    first_name: "Cheng",
    last_name: "Devith",
    gender: "M",
    dob: "2004-12-08",
    username: "steve",
    email: "chengdevith5@gmail.com",
    phone_number: "123456789",
    bio: "Software developer",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg",
    address: "Phnom Penh",
    facebook: "https://www.facebook.com/senpai",
    twitter: "https://www.twitter.com/senpai",
    instagram: "https://www.instagram.com/senpai",
    linkedin: "https://www.linkedin.com/senpai"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userData);
  const [successMessage, setSuccessMessage] = useState('');

  // Update formData when userData changes (e.g., after API fetch)
  useEffect(() => {
    setFormData(userData);
  }, [userData]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Calculate age from date of birth
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would normally make an API call to update the user data
    // For example: updateUserDetailComponents(formData).then(response => {...})
    
    setUserData(formData);
    setIsEditing(false);
    setSuccessMessage('Profile updated successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  // Handle cancel edit
  const handleCancel = () => {
    setFormData(userData);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">User Profile</h1>
          <p className="text-gray-600">View and edit your personal information</p>
        </div>
      </div>

      {/* Success message */}
      {successMessage && (
        <div className="max-w-4xl mx-auto mt-4 p-4 bg-green-100 text-green-700 rounded-md flex items-center justify-between">
          <span>{successMessage}</span>
          <button onClick={() => setSuccessMessage('')}>
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
                style={{ color: '#875AFA' }}
              >
                Edit Profile
              </button>
            )}
          </div>

          {/* Profile avatar */}
          <div className="flex flex-col items-center -mt-20 pb-6">
            <div className="h-40 w-40 rounded-full border-4 border-white overflow-hidden bg-white shadow-lg relative">
              {userData.avatar ? (
                <img src={userData.avatar} alt="Profile" className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full bg-purple-200 flex items-center justify-center">
                  <User size={80} className="text-purple-400" />
                </div>
              )}
              {isEditing && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <Camera size={18} className="text-purple-600" />
                  </div>
                </div>
              )}
            </div>
            <h2 className="text-2xl font-bold mt-4">{userData.first_name} {userData.last_name}</h2>
            <p className="text-gray-600">@{userData.username}</p>
          </div>

          {/* Form content */}
          <div className="px-6 pb-8">
            <form onSubmit={handleSubmit}>
              <div className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <User size={20} className="mr-2" style={{ color: '#875AFA' }} />
                    Personal Information
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* First Name */}
                      <div>
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: '#875AFA' }}
                          />
                        ) : (
                          <p className="text-gray-800">{userData.first_name}</p>
                        )}
                      </div>

                      {/* Last Name */}
                      <div>
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: '#875AFA' }}
                          />
                        ) : (
                          <p className="text-gray-800">{userData.last_name}</p>
                        )}
                      </div>

                      {/* Username */}
                      <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                          Username
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: '#875AFA' }}
                          />
                        ) : (
                          <p className="text-gray-800">@{userData.username}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        {isEditing ? (
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: '#875AFA' }}
                          />
                        ) : (
                          <div className="flex items-center">
                            <Mail size={16} className="text-gray-400 mr-2" />
                            <p className="text-gray-800">{userData.email}</p>
                          </div>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            id="phone_number"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: '#875AFA' }}
                          />
                        ) : (
                          <div className="flex items-center">
                            <Phone size={16} className="text-gray-400 mr-2" />
                            <p className="text-gray-800">{userData.phone_number}</p>
                          </div>
                        )}
                      </div>

                      {/* Address */}
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Address
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: '#875AFA' }}
                          />
                        ) : (
                          <div className="flex items-center">
                            <MapPin size={16} className="text-gray-400 mr-2" />
                            <p className="text-gray-800">{userData.address}</p>
                          </div>
                        )}
                      </div>

                      {/* Gender */}
                      <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                          Gender
                        </label>
                        {isEditing ? (
                          <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: '#875AFA' }}
                          >
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="O">Other</option>
                          </select>
                        ) : (
                          <p className="text-gray-800">
                            {userData.gender === 'M' ? 'Male' : userData.gender === 'F' ? 'Female' : 'Other'}
                          </p>
                        )}
                      </div>

                      {/* Date of Birth */}
                      <div>
                        <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                          Date of Birth
                        </label>
                        {isEditing ? (
                          <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: '#875AFA' }}
                          />
                        ) : (
                          <div className="flex items-center">
                            <Calendar size={16} className="text-gray-400 mr-2" />
                            <p className="text-gray-800">
                              {formatDate(userData.dob)} ({calculateAge(userData.dob)} years old)
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  {isEditing ? (
                    <textarea
                      id="bio"
                      name="bio"
                      rows="4"
                      value={formData.bio}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      style={{ outlineColor: '#875AFA' }}
                    />
                  ) : (
                    <p className="text-gray-800">{userData.bio}</p>
                  )}
                </div>

                {/* Social Media Links */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Social Media</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Facebook */}
                    <div>
                      <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-1">
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
                            value={formData.facebook}
                            onChange={handleChange}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: '#875AFA' }}
                          />
                        </div>
                      ) : (
                        userData.facebook && (
                          <a 
                            href={userData.facebook} 
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
                      <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mb-1">
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
                            value={formData.twitter}
                            onChange={handleChange}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: '#875AFA' }}
                          />
                        </div>
                      ) : (
                        userData.twitter && (
                          <a 
                            href={userData.twitter} 
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
                      <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">
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
                            value={formData.instagram}
                            onChange={handleChange}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: '#875AFA' }}
                          />
                        </div>
                      ) : (
                        userData.instagram && (
                          <a 
                            href={userData.instagram} 
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
                      <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
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
                            value={formData.linkedin}
                            onChange={handleChange}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            style={{ outlineColor: '#875AFA' }}
                          />
                        </div>
                      ) : (
                        userData.linkedin && (
                          <a 
                            href={userData.linkedin} 
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
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-md shadow-sm text-white flex items-center"
                      style={{ backgroundColor: '#875AFA' }}
                    >
                      <Save size={18} className="mr-2" />
                      Save Changes
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