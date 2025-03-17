import React from "react";
import FolioComponents3 from "./FolioComponents3";
import { useLocation } from "react-router-dom";
import {
  useGetTemplateFolioQuery,
  useUseGetTemplateFolioByIdQuery,
} from "../../redux/services/templateFolioSlice";
import { useGetAboutMeByIdQuery } from "../../redux/services/aboutMeSlice";
import { data } from "autoprefixer";

const SaveFolio = () => {
  const location = useLocation();
  console.log("Location State:", location.state);

  // Fetch folio details
  const { data: saveFolio, isLoading: loadFolio } =
    useUseGetTemplateFolioByIdQuery(16);
  return (
    <section>
      <FolioComponents3

      // ... your preview component props ...
      //   ABoutMeImg={
      //     AboutMePreviewUrls.length > 0
      //       ? AboutMePreviewUrls
      //       : AboutMeForm.images
      //   }
      //   firstName={AboutMeForm.personal_info.first_name}
      //   Lastname={AboutMeForm.personal_info.last_name}
      //   dob={AboutMeForm.personal_info.date_of_birth}
      //   jobNow={AboutMeForm.personal_info.job}
      //   url={AboutMeForm.personal_info.social_media}
      //   skillTitle={formSkill.title}
      //   skillDes={formSkill.description}
      //   skillImg={
      //     skillPreviewUrls.length > 0 ? skillPreviewUrls : formSkill.images
      //   }
      //   job={weForm.job_title}
      //   companyName={weForm.company_name}
      //   hireDate={weForm.hired_date}
      //   jobDes={weForm.job_description}
      //   responsibility={weForm.responsibility}
      //   achievements={weForm.achievements}
      //   contactDescription={formData.description}
      //   contactsTitle={formData.title}
      //   contactsAddress={formData.address}
      //   contactEmail={formData.contact_email}
      //   contactPhone={formData.phone}
      //   projectImage={
      //     proPreviewUrls.length > 0
      //       ? proPreviewUrls
      //       : formProject.project_image
      //   }
      //   projectLink={formProject.link_to_project}
      //   projectTitle={formProject.project_title}
      //   projectescription={formProject.project_description}
      //   serviceImage={
      //     servicePreviewUrls.length > 0
      //       ? servicePreviewUrls
      //       : formService.images
      //   }
      //   serviceTitle={formService.title}
      //   serviceDescription={formService.description}
      //   blogImage={
      //     blogPreviewUrls.length > 0 ? blogPreviewUrls : formBlog.images
      //   }
      //   blogTitle={formBlog.title}
      //   blogDescription={formBlog.description}
      />
    </section>
  );
};

export default SaveFolio;
