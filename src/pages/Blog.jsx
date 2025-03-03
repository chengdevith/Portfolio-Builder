import React from 'react';
import BlogBanner from '../components/BlogComponents/BlogBanner';
import Slider from '../components/BlogComponents/Slider';
import Detail from '../components/BlogComponents/Detail';

export default function BlogPage() {
  return (
    <div>
      <BlogBanner/>
      <Slider/>
      <Detail/>
    </div>
  );
}
