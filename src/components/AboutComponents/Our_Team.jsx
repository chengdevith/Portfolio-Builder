

import { FaFacebook, FaGithub, FaTelegram } from 'react-icons/fa';
import Sokneang from '../../assets/Member_images/Sokneang.png';
import Tharath from '../../assets/Member_images/Tharath.png';
import Sonita from '../../assets/Member_images/Sonita.png';
import Linet from '../../assets/Member_images/Linet.png';
import Vanlyda from '../../assets/Member_images/Vanlyda.png';
import Devith from '../../assets/Member_images/Devith.png';
import Tongeang from '../../assets/Member_images/Tongeang.png';
import React from 'react'

const teamMembers = [
    {
      name: 'Lay Sokneang',
      role: 'Front-end Developer',
      image: Sokneang,
      description: 'I am a Foundation student at the ISTAD. I have skills in HTML, CSS, Bootstrap, JavaScript, and React.js, which I used to build this website.',
      github: 'https://github.com/Sokneang8888',
      telegram: 'https://t.me/Neang_8888',
      facebook: 'https://www.facebook.com/share/163Bdm46QM/?mibextid=wwXIfr',
    },
    {
      name: 'Rann Tharath',
      role: 'Front-end Developer',
      image: Tharath,
      description: 'I am a Foundation student at the ISTAD. I have skills in HTML, CSS, Bootstrap, JavaScript, and React.js, which I used to build this website.',
      github: 'https://github.com/ranntharath',
      telegram: 'http://t.me/ranntharath',
      facebook: 'https://www.facebook.com/ranntharath',
    },
    {
      name: 'Ban Sonita',
      role: 'Front-end Developer',
      image: Sonita,
      description: 'I am a Foundation student at the ISTAD. I have skills in HTML, CSS, Bootstrap, JavaScript, and React.js, which I used to build this website.',
      github: 'https://github.com/BANSONITA',
      telegram: '@bansonita',
      facebook: 'https://www.facebook.com/profile.php?id=100090239463699&mibextid=ZbWKwL',
    },
    {
      name: 'Thai Linet',
      role: 'Front-end Developer',
      image: Linet,
      description: 'I am a Foundation student at the ISTAD. I have skills in HTML, CSS, Bootstrap, JavaScript, and React.js, which I used to build this website.',
      github: 'https://github.com/thaiLint',
      telegram: 'https://t.me/Linet_thai',
      facebook: 'https://www.facebook.com/share/15xqepBtfq/?mibextid=wwXIfr',
    },
    {
      name: 'Hor Vanlyda',
      role: 'Front-end Developer',
      image: Vanlyda,
      description: 'I am a Foundation student at the ISTAD. I have skills in HTML, CSS, Bootstrap, JavaScript, and React.js, which I used to build this website.',
      github: 'https://github.com/VannLida45',
      telegram: 'https://t.me/hor_vanlyda',
      facebook: 'https://www.facebook.com/vanlyda.hor?mibextid=wwXIfr&mibextid=wwXIfr',
    },
    {
      name: 'Cheng Devith',
      role: 'Front-end Developer',
      image: Devith,
      description: 'I am a Foundation student at the ISTAD. I have skills in HTML, CSS, Bootstrap, JavaScript, and React.js, which I used to build this website.',
      github: 'https://github.com/chengdevith',
      telegram: 'https://t.me/chengdevith',
      facebook: 'https://www.facebook.com/cheng.devith.1',
    },
    {
      name: 'Thet Tongeang',
      role: 'Front-end Developer',
      image: Tongeang,
      description: 'I am a Foundation student at the ISTAD. I have skills in HTML, CSS, Bootstrap, JavaScript, and React.js, which I used to build this website.',
      github: 'https://github.com/tongeangthet',
      telegram: 'https://t.me/tongeangg',
      facebook: 'https://www.facebook.com/share/15XpZ7sooe/?mibextid=wwXIfr',
    },
    {
      name: 'Lay Sokneang',
      role: 'Front-end Developer',
      image: '/path-to-image/member3.png',
      description: 'I am a Foundation student at the ISTAD. I have skills in HTML, CSS, Bootstrap, JavaScript, and React.js, which I used to build this website.',
      github: 'https://github.com/sokneang090824',
      telegram: 'https://t.me/Neang_8888',
    },
  ];


export default function Our_Team() {
  return (
    <div>
    <section className="py-16 bg-white text-center mt-56">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-color-primary mb-10">About Our Team</h2>
        <div className="max-w-screen-lg px-20 m-auto grid grid-cols-1 gap-8">
          {teamMembers.map((member, index) =>
            index % 2 === 1 ? ( 
              // Odd index 
              <div key={index} className="flex items-center gap-20 justify-end my-8">
                <div className="w-full text-end">
                  <h3 className="text-xl font-bold py-1">{member.name}</h3>
                  <p className="text-color-primary italic">{member.role}</p>
                  <p className="text-color-description mt-3">{member.description}</p>
                  <div className="flex space-x-4 mt-4 text-color-primary justify-end">
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className=" icon text-xl cursor-pointer  hover:text-color-secondary " />
                    </a>
                    <a href={member.telegram} target="_blank" rel="noopener noreferrer">
                      <FaTelegram className="text-xl cursor-pointer  hover:text-color-secondary" />
                    </a>
                    <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                      <FaFacebook className="text-xl cursor-pointer  hover:text-color-secondary" />
                    </a>
                  </div>
                </div>
                {/* Image with Animated Outer Background */}
                <div className="relative w-60 h-60 flex items-center justify-center">
                  {/* Outer Large Circle with Heartbeat Animation */}
                  <div className="absolute w-64 h-64 bg-purple-200 rounded-full animate-heartbeat"></div>
                  {/* Inner Gradient Circle */}
                  <div className="absolute w-52 h-52 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 rounded-full object-cover border-4 border-white"
                    />
                  </div>
                </div>
              </div>
            ) : ( 
              // Even index 
              <div key={index} className="flex items-center justify-start gap-20 my-8">
                {/* Image with Animated Outer Background */}
                <div className="relative w-60 h-60 flex items-center justify-center">
                  {/* Outer Large Circle with Heartbeat Animation */}
                  <div className="absolute w-64 h-64 bg-purple-200 rounded-full animate-heartbeat"></div>
                  {/* Inner Gradient Circle */}
                  <div className="absolute w-52 h-52 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 rounded-full object-cover border-4 border-white"
                    />
                  </div>
                </div>
                <div className="w-full text-start">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-color-primary italic">{member.role}</p>
                  <p className="text-color-description mt-2">{member.description}</p>
                  <div className="flex space-x-4 mt-4 text-color-primary ">
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-xl cursor-pointer hover:text-color-secondary" />
                    </a>
                    <a href={member.telegram} target="_blank" rel="noopener noreferrer">
                      <FaTelegram className="text-xl cursor-pointer  hover:text-color-secondary" />
                    </a>
                    <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-xl cursor-pointer  hover:text-color-secondary" />
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

      </div>
    </section>
    </div>
  )
}
