import React from "react";
import { FaRegUser } from "react-icons/fa";
import {
  IoIosArrowForward,
  IoMdLogOut,
} from "react-icons/io";
import { CiSettings } from "react-icons/ci";

function ProfileComponent() {
  return (
    <div className="w-30 lg:w-72 bg-white  px-4 py-7 absolute right-1 top-16 duration-200 ease-out z-50 rounded-lg">
      <div className="flex  items-center gap-3">
        <div className="w-16 h-16">
          <img
            className="w-full rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
            alt="profile"
          />
        </div>

        <div>
          <p>Your Name</p>
          <p>example@gmail.com</p>
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
        

        <div className="flex gap-2 items-center bg-white p-2 rounded-l hover:bg-slate-100">
          <IoMdLogOut className="text-xl" />
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;
