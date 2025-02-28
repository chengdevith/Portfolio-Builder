import React, { useState } from "react";

import ProfileComponent from "./ProfileComponent";

function DropDownProfile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div >
      <img
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full cursor-pointer"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
        alt=""
      />
      {isOpen && <ProfileComponent/>}
    </div>
  );
}

export default DropDownProfile;
