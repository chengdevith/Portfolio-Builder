import React from "react";
import { FaRegUser } from "react-icons/fa";
import {
  IoIosArrowForward,
  IoMdLogOut,
} from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { useGetUserProfileQuery } from "../redux/services/authSlice";

function ProfileComponent() {
   const {
      data: userProfile,
      isLoading: myLoading,
      error: myError,
    } = useGetUserProfileQuery();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };
  return (
    <div className="w-30 lg:w-[300px] bg-white  px-4 py-7 absolute right-1 top-16 duration-200 ease-out z-50 rounded-lg">
      <div className="flex  items-center gap-3">
        <div className="">
          <img
            className="w-16  h-16 rounded-full cursor-pointer"
            src={userProfile.avatar}
            alt="profile"
          />
        </div>

        <div>
          <p>{userProfile.username}</p>
          <p>{userProfile.email}</p>
        </div>
      </div>
      <hr className="mt-3 mb-5 border-slate-300" />
      <div className="flex flex-col gap-2 mt-4 ">
        <div className="flex justify-between p-2 bg-white items-center rounded-l hover:bg-slate-100">
          <div className="flex gap-2 items-center">
            <FaRegUser />
            <p>My Profile</p>
          </div>
          <IoIosArrowForward />
        </div>
        <div className="flex justify-between p-2 bg-white items-center rounded-l hover:bg-slate-100">
          <div className="flex gap-2 items-center">
            <CiSettings className="text-xl" />
            <p>Setting</p>
          </div>
          <IoIosArrowForward />
        </div>
        

        <button onClick={handleLogout} className="flex gap-2 items-center bg-white p-2 rounded-l hover:bg-slate-100">
          <IoMdLogOut className="text-xl" />
          <p>Log out</p>
        </button>
      </div>
    </div>
  );
}

export default ProfileComponent;
