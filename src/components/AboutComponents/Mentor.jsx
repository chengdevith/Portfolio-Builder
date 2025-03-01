
import React from 'react'
import { Card } from 'flowbite-react';
import { FaFacebook, FaTelegram, FaPhone, FaGithub } from 'react-icons/fa';
const mentors = [
    {
      name: 'Mom Reksmey',
      role: 'Mentor',
      image: '/path-to-image/mentor1.png',
    },
    {
      name: 'Eung Lyzhia',
      role: 'Mentor',
      image: '/path-to-image/mentor2.png',
    },
  ];

export default function Mentor() {
  return (
    <div>
        <section className="py-16 bg-white text-center">
            <div className="max-w-screen-xl mx-auto bg-red-200 relative">
                <div className="h-96 flex justify-center items-center bg-purple-700 text-white py-6 mb-10 rounded-lg">
                    <h2 className="text-3xl font-bold mb-40">About Our Mentor</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 absolute top-60 justify-center w-full">
                {mentors.map((mentor, index) => (
                    <Card key={index} className="shadow-lg p-6 text-center border-none">
                        <div className="flex flex-col items-center">
                            <img
                            src={mentor.image}
                            alt={mentor.name}
                            className="w-52 h-52 rounded-full border-4 border-purple-400"
                            />
                            <h3 className="text-xl font-bold mt-4">{mentor.name}</h3>
                            <p className="text-purple-600 italic">{mentor.role}</p>
                            <p className="text-gray-600 mt-2">which I used to build this website.</p>
                            <div className="flex space-x-4 mt-4 text-purple-600">
                            <FaPhone className="text-xl cursor-pointer" />
                            <FaFacebook className="text-xl cursor-pointer" />
                            <FaGithub className="text-xl cursor-pointer" />
                            <FaTelegram className="text-xl cursor-pointer" />
                            </div>
                        </div>
                    </Card>
                ))}
                </div>
            </div>
        </section>
    </div>
  )
}
