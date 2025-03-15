import React from 'react';
import BlogBanner from '../components/BlogComponents/BlogBanner';
import Slider from '../components/BlogComponents/Slider';
import Detail from '../components/BlogComponents/Detail';
import Design_Por from'../components/BlogComponents/Design_Por';

export default function BlogPage() {
  return (
    <div>
      <BlogBanner/>
      <Design_Por/>
      <Slider/>
      <Detail/>
    </div>
  );
}
