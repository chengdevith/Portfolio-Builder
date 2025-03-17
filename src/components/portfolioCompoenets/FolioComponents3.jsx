import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Facebook,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useCreateSelectTemplateMutation } from "../../redux/services/selectTemplateSlice";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetUserProfileQuery } from "../../redux/services/authSlice";
const FolioComponents3 = ({
  firstName,
  Lastname,
  ABoutMeImg,
  skillImg,
  skillTitle,
  skillDes,
  job,
  companyName,
  hireDate,
  jobDes,
  responsibility,
  achievements,
  contactDescription,
  contactsTitle,
  contactsAddress,
  contactEmail,
  contactPhone,
  projectImage,
  projectLink,
  projectTitle,
  projectescription,
  serviceImage,
  serviceTitle,
  serviceDescription,
  blogImage,
  blogTitle,
  blogDescription,
}) => {
  //Sample data based on the API structure provided
  const portfolio = {
    title: "Portfolio A",
    type: "Type A",
    social_media_link_json: '{"facebook":"https://facebook.com"}',
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
    is_public: true,
  };
  const navigate = useNavigate()
  const location = useLocation()
  const {data} = useGetUserProfileQuery()
  const [createSelectTemplate, { isLoading, error }] = useCreateSelectTemplateMutation();
  const handleSelectTemplate = async () => {
  try {
    const payload = {
      user: data.id,
      template: location.state
    };
    
    // Log the exact payload being sent
    console.log("Sending payload:", payload);
    
    const response = await createSelectTemplate(payload);
    console.log("Full response:", response);
    
    if ('data' in response) {
      navigate("/create-template", { state: response.data.id });
    } else {
      console.error("Error details:", response.error);
    }
  } catch (err) {
    console.error("Request failed:", err);
  }
};
  // Navigation state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
  };

  // Social media links
  const socialLinks = JSON.parse(
    portfolio.social_media_link_json || '{"facebook":"https://facebook.com"}'
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 w-full z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a
                href="#home"
                className="flex-shrink-0 flex items-center"
                onClick={() => setActiveSection("home")}
              >
                <img
                  className="h-8 w-auto"
                  src={portfolio.portfolio_avatar}
                  alt="Logo"
                />
                <span className="ml-2 text-xl font-bold text-gray-800">
                  {portfolio.title}
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#home"
                onClick={() => setActiveSection("home")}
                className={`px-3 py-2 rounded-md ${
                  activeSection === "home"
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setActiveSection("about")}
                className={`px-3 py-2 rounded-md ${
                  activeSection === "about"
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => setActiveSection("skills")}
                className={`px-3 py-2 rounded-md ${
                  activeSection === "skills"
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Skills
              </a>
              <a
                href="#experience"
                onClick={() => setActiveSection("experience")}
                className={`px-3 py-2 rounded-md ${
                  activeSection === "experience"
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={() => setActiveSection("projects")}
                className={`px-3 py-2 rounded-md ${
                  activeSection === "projects"
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Projects
              </a>
              <a
                href="#services"
                onClick={() => setActiveSection("services")}
                className={`px-3 py-2 rounded-md ${
                  activeSection === "services"
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Services
              </a>
              <a
                href="#blog"
                onClick={() => setActiveSection("blog")}
                className={`px-3 py-2 rounded-md ${
                  activeSection === "blog"
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Blog
              </a>
              <a
                href="#contact"
                onClick={() => setActiveSection("contact")}
                className={`px-3 py-2 rounded-md ${
                  activeSection === "contact"
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <a
                href="#home"
                onClick={() => {
                  setActiveSection("home");
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md ${
                  activeSection === "home"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => {
                  setActiveSection("about");
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md ${
                  activeSection === "about"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => {
                  setActiveSection("skills");
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md ${
                  activeSection === "skills"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                Skills
              </a>
              <a
                href="#experience"
                onClick={() => {
                  setActiveSection("experience");
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md ${
                  activeSection === "experience"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={() => {
                  setActiveSection("projects");
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md ${
                  activeSection === "projects"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                Projects
              </a>
              <a
                href="#services"
                onClick={() => {
                  setActiveSection("services");
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md ${
                  activeSection === "services"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                Services
              </a>
              <a
                href="#blog"
                onClick={() => {
                  setActiveSection("blog");
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md ${
                  activeSection === "blog"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                Blog
              </a>
              <a
                href="#contact"
                onClick={() => {
                  setActiveSection("contact");
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md ${
                  activeSection === "contact"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
      >
        <button onClick={()=>navigate("/template")} >back to template</button>
        <button onClick={handleSelectTemplate}>create template</button>
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome {portfolio.title}
            </h1>
            <p className="text-xl mb-6">{portfolio.biography}</p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition duration-300"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-blue-600 transition duration-300"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={portfolio.hero_image}
              alt="Hero"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 mb-6"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <img
                src={ABoutMeImg}
                alt="About Me"
                className="rounded-full object-cover shadow-lg w-64 h-64"
              />
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                Who I Am
              </h3>
              <p className="text-gray-600 mb-6">
                I'm a passionate professional dedicated to delivering
                high-quality solutions. With years of experience in the
                industry, I've developed a keen eye for detail and a strong
                commitment to excellence.
              </p>
              <p className="text-gray-600 mb-6">
                My approach combines technical expertise with creative
                problem-solving to meet the unique needs of each project. I
                believe in continuous learning and staying up-to-date with the
                latest industry trends and technologies.
              </p>

              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-center">
                  <ChevronRight className="text-blue-500 mr-2" size={20} />
                  <span>
                    <strong>Experience:</strong> {portfolio.we}+ years
                  </span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="text-blue-500 mr-2" size={20} />
                  <span>
                    <strong>Projects:</strong> {portfolio.project}+ completed
                  </span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="text-blue-500 mr-2" size={20} />
                  <span>
                    <strong>Skills:</strong> {portfolio.skill}+ professional
                  </span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="text-blue-500 mr-2" size={20} />
                  <span>
                    <strong>Services:</strong> {portfolio.service}+ offered
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">My Skills</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of the key skills I've developed throughout my
              professional journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* {skills.map((skill, index) => ( */}
            <div
              // key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="mb-4 text-blue-500 flex justify-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                  <img src={skillImg} alt="" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">
                {skillTitle}
              </h3>
              <p className="text-gray-600 text-center">{skillDes}</p>
            </div>
            {/* ))} */}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My professional journey includes working with innovative companies
              and contributing to impactful projects.
            </p>
          </div>

          <div className="space-y-8">
            {/* {workExperiences.map((work, index) => ( */}
            <div
              // key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-l-4 border-blue-500"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{job}</h3>
                  <p className="text-blue-600">{companyName}</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">{hireDate}</span>
              </div>

              <p className="text-gray-600 mb-4">{jobDes}</p>

              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold text-gray-700 mb-2">
                  Responsibilities:
                </h4>
                <p className="text-gray-600">{responsibility}</p>
              </div>

              <div className="mt-4 bg-blue-50 p-4 rounded">
                <h4 className="font-semibold text-blue-700 mb-2">
                  Key Achievements:
                </h4>
                <p className="text-gray-700">{achievements}</p>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of my recent work and the projects I'm most proud of.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* {projects.map((project, index) => ( */}
            <div
              // key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="relative">
                <img
                  src={projectImage}
                  alt={projectTitle}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                  <a
                    href={projectLink}
                    target="_blank"
                    className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center"
                  >
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {projectTitle}
                </h3>
                <p className="text-gray-600">{projectescription}</p>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Services Offered
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional services tailored to meet your specific needs and
              help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* {services.map((service, index) => ( */}
            <div
              // key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={serviceImage}
                alt={serviceTitle}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {serviceTitle}
                </h3>
                <p className="text-gray-600">{serviceDescription}</p>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Latest Blog Posts
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with my latest thoughts, insights, and industry
              trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* {blogs.map((blog, index) => ( */}
            <div
              // key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={blogImage}
                alt={blogTitle}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {blogTitle}
                </h3>
                <p className="text-gray-600 mb-4">{blogDescription}</p>
                <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                  Read More <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {contactDescription}
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {contactsTitle}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin
                      className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <p className="text-gray-700">{contactsAddress}</p>
                  </div>

                  <div className="flex items-center">
                    <Mail
                      className="text-blue-500 mr-3 flex-shrink-0"
                      size={20}
                    />
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-gray-700 hover:text-blue-600"
                    >
                      {contactEmail}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Phone
                      className="text-blue-500 mr-3 flex-shrink-0"
                      size={20}
                    />
                    <a
                      href={`tel:${contactPhone}`}
                      className="text-gray-700 hover:text-blue-600"
                    >
                      {contactPhone}
                    </a>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Follow Me
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href={socialLinks.facebook}
                      className="text-gray-500 hover:text-blue-600"
                      target="_blank"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-blue-400"
                      target="_blank"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-700"
                      target="_blank"
                    >
                      <Github size={20} /> {/* Changed from GitHub to Github */}
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-blue-700"
                      target="_blank"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-pink-600"
                      target="_blank"
                    >
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Send Message
                </h3>

                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="How can I help you?"
                    />
                  </div>
                  {/* // ... (previous code remains the same until the Contact
                  Section form) */}
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="5"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 font-medium"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">{portfolio.title}</h3>
              <p className="text-gray-400 mt-2">
                © {new Date().getFullYear()} All Rights Reserved
              </p>
            </div>

            <div className="flex space-x-6">
              {Object.entries(socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {platform === "facebook" && <Facebook size={20} />}
                  {platform === "twitter" && <Twitter size={20} />}
                  {platform === "github" && <Github size={20} />}{" "}
                  {/* Changed from GitHub to Github */}
                  {platform === "linkedin" && <Linkedin size={20} />}
                  {platform === "instagram" && <Instagram size={20} />}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>Designed & Built with React and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FolioComponents3;
