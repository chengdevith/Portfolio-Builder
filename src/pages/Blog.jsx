import React from 'react';
import BlogBanner from '../components/BlogComponents/BlogBanner';
import Slider from '../components/BlogComponents/Slider';
import Detail from '../components/BlogComponents/Detail';
import Design_Por from'../components/BlogComponents/Design_Por';
import SingIn from'../components/BlogComponents/SingIn';

export default function BlogPage() {
  return (
    <div>
      <BlogBanner/>
      <Slider/>
      <Design_Por/>
      <SingIn/>
      <Detail/>
    </div>
  );
}
