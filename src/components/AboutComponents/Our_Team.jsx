

import { FaFacebook, FaGithub, FaTelegram } from 'react-icons/fa';
import Sokneang from '../../assets/Member_images/sokneang.jpg';
import Tharath from '../../assets/Member_images/tharath.jpg';
import Sonita from '../../assets/Member_images/bansonita.jpg';
import Linet from '../../assets/Member_images/lineth.jpg';
import Vanlyda from '../../assets/Member_images/Vanlyda.jpg';
import devith from '../../assets/Member_images/devith.jpg';
import Tongeang from '../../assets/Member_images/tongeng.jpg';
import cheata from '../../assets/Member_images/cheata.jpg';
import React from 'react'

const teamMembers = [
    {
      name: 'Lay Sokneang',
      role: 'Front-end Developer',
      image: Sokneang,
      description: 'I am a Foundation student at the ISTAD. I have skills in HTML, CSS, Bootstrap, JavaScript, and React-Js.',
      github: 'https://github.com/Sokneang8888',
      telegram: 'https://t.me/Neang_8888',
      facebook: 'https://www.facebook.com/share/163Bdm46QM/?mibextid=wwXIfr',
    },
    {
      name: 'Rann Tharath',
      role: 'Front-end Developer',
      image: Tharath,
      description: 'I am a Foundation student at the ISTAD. I have skills in HTML, CSS, Bootstrap, JavaScript, and React-Js.',
      github: 'https://github.com/ranntharath',
      telegram: 'http://t.me/ranntharath',
      facebook: 'https://www.facebook.com/ranntharath',
    },
    {
      name: 'Ban Sonita',
      role: 'Front-end Developer',
      image: Sonita,
      description: 'I am a Foundation student at the ISTAD. I have skills in HTML, CSS, Bootstrap, JavaScript, and React-Js.',
      github: 'https://github.com/BANSONITA',
      telegram: '@bansonita',
      facebook: 'https://www.facebook.com/profile.php?id=100090239463699&mibextid=ZbWKwL',
    },
    {
      name: 'Thai Linet',
      role: 'Front-end Developer',
      image: Linet,
      description: 'I am a Foundation student at the ISTAD. I have skills in HTML, CSS, Bootstrap, JavaScript, and React-Js.',
      github: 'https://github.com/thaiLint',
      telegram: 'https://t.me/Linet_thai',
      facebook: 'https://www.facebook.com/share/15xqepBtfq/?mibextid=wwXIfr',
    },
    {
      name: 'Hor Vanlyda',
      role: 'Front-end Developer',
      image: Vanlyda,
      description: 'I am a Foundation student at the ISTAD. I have skills in HTML, CSS, Bootstrap, JavaScript, and React-Js.',
      github: 'https://github.com/VannLida45',
      telegram: 'https://t.me/hor_vanlyda',
      facebook: 'https://www.facebook.com/vanlyda.hor?mibextid=wwXIfr&mibextid=wwXIfr',
    },
    {
      name: 'Cheng Devith',
      role: 'Front-end Developer',
      image: devith,
      description: 'I am a Foundation student at the ISTAD. I have skills in HTML, CSS, Bootstrap, JavaScript, and React-Js.',
      github: 'https://github.com/chengdevith',
      telegram: 'https://t.me/chengdevith',
      facebook: 'https://www.facebook.com/cheng.devith.1',
    },
    {
      name: 'Thet Tongeang',
      role: 'Front-end Developer',
      image: Tongeang,
      description: 'I am a Foundation student at the ISTAD. I have skills in HTML, CSS, Bootstrap, JavaScript, and React-Js.',
      github: 'https://github.com/tongeangthet',
      telegram: 'https://t.me/tongeangg',
      facebook: 'https://www.facebook.com/share/15XpZ7sooe/?mibextid=wwXIfr',
    },
    {
      name: 'Lay Sokneang',
      role: 'Front-end Developer',
      image: cheata,
      description: 'I am a Foundation student at the ISTAD. I have skills in HTML, CSS, Bootstrap, JavaScript, and React-Js.',
      github: 'https://github.com/sokneang090824',
      telegram: 'https://t.me/Neang_8888',
    },
  ];


export default function Our_Team() {
  return (
    <div>
      <section className="py-16 bg-white text-center my-auto md:mt-56 mt-[700px]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-color-primary mb-10">About Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 1 ? 'md:flex-row-reverse flex text-start' : 'md:flex-row'
                } items-center gap-16 my-8`}
              >
                <div className="relative w-48 h-48 md:w-60 md:h-60 flex items-center justify-center">

                  <div className="absolute w-56 h-56 md:w-64 md:h-64 bg-purple-200 rounded-full animate-heartbeat"></div>

                  <div className="absolute w-40 h-40 md:w-52 md:h-52 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-white"
                    />
                  </div>
                </div>
                <div className={`w-1/2 ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'} text-center`}>
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-base lg:text-lg py-2 text-color-primary italic">{member.role}</p>
                  <p className="text-base lg:text-lg text-color-description  mt-2">{member.description}</p>
                  <div className={`flex space-x-4 mt-4 text-color-primary ${
                    index % 2 === 1 ? 'md:justify-end' : 'md:justify-start'
                  } justify-center`}>
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-xl cursor-pointer hover:text-color-secondary" />
                    </a>
                    <a href={member.telegram} target="_blank" rel="noopener noreferrer">
                      <FaTelegram className="text-xl cursor-pointer hover:text-color-secondary" />
                    </a>
                    <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                      <FaFacebook className="text-xl cursor-pointer hover:text-color-secondary" />
                    </a>
                  </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
