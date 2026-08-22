import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import BlogComponent from "./BlogComponent.jsx";
import { getUserBlogs } from "../../APIS/blog/userBlogs.js";

export default function MyBlogs() {
  const { id } = useAuth();
  const [userblog, setUserBlog] = useState([]);
  async function get_user_blogs() {
    try {
      const result = await getUserBlogs(id);
      console.log(result);

      if (result?.status == 200) {
        setUserBlog(result?.data);
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 404) {
        setUserBlog([]);
      } else {
        console.log(error);
      }
    }
  }
  useEffect(() => {
    if (id) {
      get_user_blogs();
    }
  }, [id]);
  return (
    <>
      {userblog?.length ? (
        userblog?.map((ele) => {
          return (
            <BlogComponent
              ele={ele}
              key={ele.blog_id}
              get_all_blogs={get_user_blogs}
            />
          );
        })
      ) : (
        <h2 className="my-10 py-10 flex justify-center items-center font-bold text-2xl text-amber-800">
          You donot have any blogs
        </h2>
      )}
    </>
  );
}
