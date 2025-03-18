
import React from 'react'
import { FaFacebook, FaTelegram, FaPhone, FaGithub } from 'react-icons/fa';
import Reksmey from '../../assets/Member_images/Reksmey.png';
import Lyzhia from '../../assets/Member_images/teacher.jpg';

const mentors = [
    {
      name: 'Mom Reksmey',
      role: 'Mentor',
      image: Reksmey,
      github: 'https://github.com/VannLida45',
      telegram: 'https://t.me/hor_vanlyda',
      facebook: 'https://www.facebook.com/vanlyda.hor?mibextid=wwXIfr&mibextid=wwXIfr',
    },
    {
      name: 'Eung Lyzhia',
      role: 'Mentor',
      image: Lyzhia,
      github: 'https://github.com/VannLida45',
      telegram: 'https://t.me/hor_vanlyda',
      facebook: 'https://www.facebook.com/vanlyda.hor?mibextid=wwXIfr&mibextid=wwXIfr',
    },
  ];

export default function Mentor() {
  return (
    <div>
        <section className="py-16 bg-white text-center">
            <div className="max-w-screen-xl mx-auto relative">
                <div className="h-96 flex justify-center items-center bg-gradient-to-r from-color-primary to-purple-800 text-white py-6 mb-10 rounded-lg">
                    <h2 className="text-4xl font-bold mb-40">About Our Mentor</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 absolute top-60 justify-center w-full">
                  {mentors.map((mentor, index) => (
                      <div key={index} className=" p-6 text-centere">
                          <div className="flex flex-col items-center">
                          <div className="relative w-60 h-60 flex items-center justify-center">
                            <div className="absolute w-64 h-64 bg-purple-200 rounded-full animate-heartbeat"></div>
                            <div className="absolute w-52 h-52 bg-gradient-to-b from-color-primary to-indigo-500 rounded-full flex items-center justify-center">
                              <img
                                src={mentor.image}
                                alt={mentor.name}
                                className="w-48 h-48 rounded-full object-cover border-4 border-white"
                              />
                            </div>
                          </div>
                              <h3 className="text-2xl font-bold mt-12">{mentor.name}</h3>
                              <p className="text-base lg:text-lg text-color-primary italic">{mentor.role}</p>
                              <p className="text-base lg:text-lg  text-color-description  mt-2">which I used to build this website.</p>
                              <div className="flex space-x-4 mt-4 text-color-primary">
                              <a href={mentor.facebook} target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-xl cursor-pointer hover:text-color-secondary" />
                              </a>
                              <a href={mentor.github} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-xl cursor-pointer hover:text-color-secondary" />
                              </a>
                              <a href={mentor.telegram} target="_blank" rel="noopener noreferrer">
                                <FaTelegram className="text-xl cursor-pointer hover:text-color-secondary" />
                              </a>
                              </div>
                          </div>
                      </div>
                  ))}
                </div>
            </div>
        </section>
    </div>
  )
}
