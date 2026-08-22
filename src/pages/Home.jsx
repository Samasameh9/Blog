import React, { useEffect, useState } from "react";
import Create_Blog from "../components/blog/CreateBlogButton.jsx";
import { useAuth } from "../components/context/AuthContext.jsx";
import BlogComponent from "../components/blog/BlogComponent.jsx";


export default function Home() {
const {get_all_blogs,blog} =useAuth()

  useEffect(() => {
    get_all_blogs();
  }, []);
  return (
    <>
      <h1 className="text-2xl text-amber-800 font-bold text-center my-5 ">
        Blogs
      </h1>
      <Create_Blog get_all_blogs={get_all_blogs}/>
      {blog &&
        blog.map((ele) => {
          return <BlogComponent ele={ele} key={ele.blog_id} get_all_blogs={get_all_blogs} />;
        })}
    </>
  );
}
