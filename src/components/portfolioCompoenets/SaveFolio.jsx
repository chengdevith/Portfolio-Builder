import React, { useEffect } from "react";
import FolioComponents3 from "./FolioComponents3";
import { useLocation } from "react-router-dom";
import {
  useGetTemplateFolioQuery,
  useUseGetTemplateFolioByIdQuery,
} from "../../redux/services/templateFolioSlice";
import {  useGetAllAboutMeQuery,  } from "../../redux/services/aboutMeSlice";
import { data } from "autoprefixer";
import { useGetSkillByIdQuery } from "../../redux/services/skillSlice";
import { useGetProjectByIdQuery } from "../../redux/services/projectSlice";
import { useGetBlogByByIdQuery } from "../../redux/services/blogSlice";
import { useGetServiceByIdQuery } from "../../redux/services/serviceSlice";
import { useGetWorkExperienceByIdQuery, useGetWorkExperienceQuery } from "../../redux/services/weSlice";
import { useGetContactByIdQuery, useGetContactQuery } from "../../redux/services/contactSlice";

const SaveFolio = () => {
  const location = useLocation();
 console.log(location.state)

 const { data: saveFolio, isLoading: folioLoading } = useUseGetTemplateFolioByIdQuery(location.state);
 const { data: skill, isLoading: skillLoading } = useGetSkillByIdQuery(saveFolio?.skill, { skip: !saveFolio });
 const { data: project, isLoading: projectLoading } = useGetProjectByIdQuery(saveFolio?.project, { skip: !saveFolio });
 const { data: blog, isLoading: blogLoading } = useGetBlogByByIdQuery(saveFolio?.blog, { skip: !saveFolio });
 const {data: service, isLoading: serviceLoading} = useGetServiceByIdQuery(saveFolio?.service, {skip: !saveFolio})
 const {data: we, isLoading:weLoading} = useGetWorkExperienceByIdQuery(saveFolio?.we, {skip: !saveFolio})
 const {data:contact, isLoading:contactLoading} = useGetContactByIdQuery(saveFolio?.contact, {skip: !saveFolio})
 const {data:aboutMe, isLoading:aboutMeLoading} = useGetAllAboutMeQuery();
 const aboutMeArray =[aboutMe]
 const aboutMeById =  aboutMe?.filter(e => e.id === saveFolio?.about_me)

 
 console.log("service",service)
 console.log("saveFolio",saveFolio)
 console.log("skill", skill);
 console.log("project", project);
 console.log("blog",blog)
 console.log("we",we)
 console.log("contact",contact)
 console.log("aboutMe", aboutMe)
 console.log("terst",aboutMeById)
 const isLoading = [
  folioLoading, skillLoading, projectLoading, blogLoading,
  serviceLoading, weLoading, contactLoading, aboutMeLoading
].some(Boolean);

if (isLoading) {
  return <div>Loading...</div>;
}

  return (
    <section>
      <FolioComponents3
        ABoutMeImg={
          saveFolio?.portfolio_avatar
        }
        firstName={aboutMeById[0]?.personal_info?.first_name}
        Lastname={aboutMeById[0]?.personal_info?.last_name}
        dob={aboutMeById[0]?.personal_info?.date_of_birth}
        jobNow={aboutMeById[0]?.personal_info.job}
        url={aboutMeById[0]?.personal_info.social_media[0]?.url}
        skillTitle={skill?.title}
        skillDes={skill?.description}
        skillImg={
          skill?.image[0]?.url
        }
        job={we?.job_title}
        companyName={we?.company_name}
        hireDate={we?.hired_date}
        jobDes={we?.job_description}
        responsibility={we?.responsibility}
        achievements={we?.achievements}
        contactDescription={we?.description}
        contactsTitle={contact?.title}
        contactsAddress={contact?.address}
        contactEmail={contact?.contact_email}
        contactPhone={contact?.phone}
        projectImage={
         project?.project_image
        }
        projectLink={project?.link_to_project}
        projectTitle={project?.project_title}
        projectescription={project?.project_description}
        serviceImage={
         service?.image[0]?.url
        }
        serviceTitle={service?.title}
        serviceDescription={service?.description}
        blogImage={
          blog?.image[0]?.url
        }
        blogTitle={blog?.title}
        blogDescription={blog?.description}
      />
    </section>
  );
};

export default SaveFolio;
