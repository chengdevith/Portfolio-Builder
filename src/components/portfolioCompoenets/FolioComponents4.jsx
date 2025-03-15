import React, { useState } from 'react';
import { Menu, X, Facebook, Github, Twitter, Instagram, Linkedin, ExternalLink, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

const FolioComponents4 = () => {
  // Same data structure as before (omitted for brevity)
  const portfolio = {
    title: "Portfolio A",
    type: "Type A",
    social_media_link_json: "{\"facebook\":\"https://facebook.com\"}",
    portfolio_avatar: "/api/placeholder/150/150",
    biography: "Biography here",
    we: 4,
    project: 4,
    about_me: 6,
    status: true,
    hero_image: "/api/placeholder/1200/600",
    section_image: "/api/placeholder/600/400",
    contact: 1,
    blog: 4,
    service: 3,
    skill: 4,
    template: 4,
    select_template: 4,
    is_public: true
  };

  // ... (rest of the data objects remain the same)

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  const socialLinks = JSON.parse(portfolio.social_media_link_json);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#home" className="flex items-center" onClick={() => setActiveSection('home')}>
                <img className="h-10 w-auto rounded-full" src={portfolio.portfolio_avatar} alt="Logo" />
                <span className="ml-3 text-xl font-semibold tracking-tight">{portfolio.title}</span>
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              {['home', 'about', 'skills', 'experience', 'projects', 'services', 'blog', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 text-sm font-medium uppercase tracking-wider ${
                    activeSection === section 
                      ? 'text-cyan-400 border-b-2 border-cyan-400' 
                      : 'text-gray-300 hover:text-cyan-400 transition-colors duration-200'
                  }`}
                >
                  {section}
                </a>
              ))}
            </div>
            
            <div className="flex md:hidden items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-300 hover:text-cyan-400">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'experience', 'projects', 'services', 'blog', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => { setActiveSection(section); setIsMenuOpen(false); }}
                  className={`block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-700 rounded-md uppercase tracking-wider ${
                    activeSection === section ? 'text-cyan-400 bg-gray-700' : ''
                  }`}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>


      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
              <span className="text-cyan-400">{portfolio.title}</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 font-light">{portfolio.biography}</p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-cyan-500 text-white px-8 py-3 rounded-md hover:bg-cyan-600 transition-all duration-300 font-medium">
                Contact Me
              </a>
              <a href="#projects" className="border-2 border-cyan-500 text-cyan-500 px-8 py-3 rounded-md hover:bg-cyan-500 hover:text-white transition-all duration-300 font-medium">
                View Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={portfolio.hero_image} alt="Hero" className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 tracking-tight">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <img src={portfolio.section_image} alt="About" className="rounded-full shadow-xl border-4 border-cyan-500/20" />
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-300 mb-6 leading-relaxed">{portfolio.biography}</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <span className="text-cyan-400 font-semibold">Experience</span>
                  <p className="text-2xl mt-2">{portfolio.we}+ Years</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <span className="text-cyan-400 font-semibold">Projects</span>
                  <p className="text-2xl mt-2">{portfolio.project}+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 tracking-tight">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* {skills.map((skill, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg hover:border-cyan-500/50 border-2 border-transparent transition-all duration-300">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            ))} */}
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 tracking-tight">Experience</h2>
          <div className="space-y-8">
            {/* {workExperiences.map((work, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400">{work.job_title}</h3>
                    <p className="text-gray-400">{work.company_name}</p>
                  </div>
                  <span className="text-gray-500">{formatDate(work.hired_date)}</span>
                </div>
                <p className="text-gray-300">{work.job_description}</p>
                <p className="text-gray-400 mt-2 italic">{work.achievements}</p>
              </div>
            ))} */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 tracking-tight">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-cyan-500/20 shadow-lg transition-all duration-300">
                <img src={project.project_image} alt={project.project_title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">{project.project_title}</h3>
                  <p className="text-gray-400 mb-4">{project.project_description}</p>
                  <a href={project.link_to_project} target="_blank" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 tracking-tight">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:border-cyan-500/50 border-2 border-transparent transition-all duration-300">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))} */}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 tracking-tight">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* {blogs.map((blog, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">{blog.title}</h3>
                <p className="text-gray-400">{blog.description}</p>
              </div>
            ))} */}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 tracking-tight">Contact</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <div className="bg-gray-800 p-6 rounded-lg">
                {/* <h3 className="text-xl font-semibold text-cyan-400 mb-4">{contacts[0].title}</h3> */}
                <div className="space-y-4 text-gray-400">
                  <div className="flex items-center">
                    <MapPin className="text-cyan-400 mr-3" size={20} />
                    {/* {contacts[0].address} */}
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-cyan-400 mr-3" size={20} />
                    {/* {contacts[0].contact_email} */}
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-cyan-400 mr-3" size={20} />
                    {/* {contacts[0].phone} */}
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Follow Me</h4>
                  <div className="flex space-x-4">
                    {/* {Object.entries(socialLinks).map(([platform, url]) => (
                      <a key={platform} href={url} target="_blank" className="text-gray-400 hover:text-cyan-400">
                        {platform === 'facebook' && <Facebook size={20} />}
                        {platform === 'twitter' && <Twitter size={20} />}
                        {platform === 'github' && <Github size={20} />}
                        {platform === 'linkedin' && <Linkedin size={20} />}
                        {platform === 'instagram' && <Instagram size={20} />}
                      </a>
                    ))} */}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="bg-gray-800 p-6 rounded-lg">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <input type="text" placeholder="Name" className="bg-gray-700 p-3 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    <input type="email" placeholder="Email" className="bg-gray-700 p-3 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                  </div>
                  <input type="text" placeholder="Subject" className="w-full bg-gray-700 p-3 rounded-md text-gray-300 mb-6 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                  <textarea placeholder="Message" rows="5" className="w-full bg-gray-700 p-3 rounded-md text-gray-300 mb-6 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
                  <button type="submit" className="w-full bg-cyan-500 text-white p-3 rounded-md hover:bg-cyan-600 transition-all duration-300">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} {portfolio.title}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FolioComponents4;
