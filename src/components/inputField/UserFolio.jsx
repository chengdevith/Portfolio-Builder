import React from 'react'
import FolioComponents3 from '../portfolioCompoenets/FolioComponents3'
import { useGetProjectByIdQuery } from '../../redux/services/projectSlice';
import { useGetWorkExperienceByIdQuery } from '../../redux/services/weSlice';
import { useGetBlogByByIdQuery } from '../../redux/services/blogSlice';
import { useGetServiceByIdQuery } from '../../redux/services/serviceSlice';

const UserFolio = () => {
    const {data:project,isLoading} = useGetProjectByIdQuery(1);
    const {data:we} = useGetWorkExperienceByIdQuery(1)
    const {data:blog} = useGetBlogByByIdQuery(1)
    // const {data:service} = useGetServiceByIdQuery(1)
    console.log(we)
    console.log(blog)
    console.log(project)
    // console.log(service)
  return (
    <FolioComponents3 />
  )
}

export default UserFolio