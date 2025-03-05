
import React from 'react'

export default function Contact_Us() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white py-16 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-8">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-gradient-to-b from-purple-900 to-purple-500 text-white p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
<<<<<<< HEAD
          <p className="text-center !text-gray-300 mb-6 description">
            Got a question? We’d love to hear from you. Send us a message and we’ll respond as soon as possible.
=======
          <p className="text-center text-gray-300 mb-6">
            Got a question? We'd love to hear from you. Send us a message and we’ll respond as soon as possible.
>>>>>>> 05dddc8ca178215469264b4b3fff392756d7ee61
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium py-1">Name</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full p-3 rounded-md text-gray-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium  py-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-3 rounded-md text-gray-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium  py-1">Message</label>
              <textarea
                rows="4"
                placeholder="Enter your message"
                className="w-full p-3 rounded-md text-gray-900 focus:outline-none"
              />
            </div>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-md">
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="w-full lg:w-1/2">
          <iframe
            title="Google Map"
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.235649787656!2d104.89921187481747!3d11.578254588623496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e1!3m2!1sen!2skh!4v1740897037091!5m2!1sen!2skh"></iframe>
        </div>
      </div>
    </div>
  );
}
