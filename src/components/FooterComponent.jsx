import React from "react";

export default function FooterComponent() {
  return (
    <footer className="bg-gradient-to-r from-[#634BA7] to-[#A632CD] text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          
          {/* Logo & Brand Name */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="w-20 h-20 overflow-hidden rounded-full mb-3">
              <img
                className="w-full h-full object-cover"
                src="https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg"
                alt="Logo"
              />
            </div>
            <span className="font-bold text-lg">Portify</span>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Services</h3>
            <ul className="space-y-2 text-base">
              <li>Provide Templates</li>
              <li>Portfolio Builder</li>
              <li>Download CV</li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Courses</h3>
            <ul className="space-y-2 text-base">
              <li>Web Design</li>
              <li>Java Programming</li>
              <li>Database Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact</h3>
            <ul className="space-y-2 text-base">
              <li>Email: laysokneang@gmail.com</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="text-center text-sm">
          <p>© 2025 YourWebsite | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
