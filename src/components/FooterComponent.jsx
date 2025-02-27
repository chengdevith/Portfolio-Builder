import React from "react";

export default function FooterComponent() {
  return (
    <footer className="bg-gradient-to-r from-[#634BA7] to-[#A632CD] text-white py-5 px-[100px] lg:px-[100px]">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col md:items-start lg:items-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full mb-2"><img className="rounded-full" src="https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg" alt="" /></div>
            <span className="font-bold text-start  ">Portify</span>
          </div>
          <div className="text-start">
            <h3 className="font-semibold mt-4 mb-2">Services</h3>
            <ul className="space-y-1 text-sm">
              <li>provide template</li>
              <li>Builder Portfolio</li>
              <li>download CV</li>
            </ul>
          </div>
          <div className="text-start">
            <h3 className="font-semibold mt-4 mb-2 ">Course</h3>
            <ul className="space-y-1 text-sm">
              <li>Web Design</li>
              <li>Java Programming</li>
              <li>Database</li>
            </ul>
          </div>
          <div className="text-start">
            <h3 className="font-semibold mt-4 mb-2">Contact</h3>
            <ul className="space-y-1 text-sm">
              <li>Email: laysokneang@gmail.com</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </div>
        </div>
        <hr className="mt-10"/>
        <div className="border-white/20 pt-4">
          <p>© 2025 YourWebsite | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
