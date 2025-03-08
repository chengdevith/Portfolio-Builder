import React, { useState, useRef, useEffect } from "react";
import ProfileComponent from "./ProfileComponent";
import { useGetUserProfileQuery } from "../redux/services/authSlice";

function DropDownProfile() {
  
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const {data:profile} = useGetUserProfileQuery()
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef}>
      <img
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full cursor-pointer"
        src={profile.avatar}
        alt=""
      />
      {isOpen && <ProfileComponent />}
    </div>
  );
}

export default DropDownProfile;
