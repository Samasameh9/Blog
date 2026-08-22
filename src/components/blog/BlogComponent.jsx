import React from "react";
import DeleteBlog from "./DeleteBlogButton.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import UpdateBlogButton from "./updateBlogButton.jsx";



export default function BlogComponent({ ele,get_all_blogs }) {
  const { id } = useAuth();
  const created = ele.b_createdAt;
  const updated = ele.b_updatedAt;

  return (
    <>
      <div className="bg-[#EDE9E9] shadow-2xl my-5 rounded-md p-5 text-amber-800 ">
        <div className="flex flex-col md:flex-row justify-between items-center pb-5">
          {" "}
          <h2 className="pb-5 md:pb-0 font-bold text-xl  flex items-center justify-center">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
            {ele.b_title}
          </h2>{" "}
          <h3 className="font-bold pb-2 md:pb-0">
            Author name:{" "}
            <span className="font-semibold text-[#EAC79F]">{ele.fullname}</span>
          </h3>
        </div>
        <h6 className="text-[#EAC79F] font-bold text-sm ps-10">
          {" "}
          Created at:{" "}
          {new Date(created).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
          })}
        </h6>
        <h6 className="text-[#EAC79F] font-bold text-sm pb-2 ps-10">
          {" "}
          updated at:{" "}
          {new Date(updated).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
          })}
        </h6>
        <p className="ps-5">{ele.b_content}</p>
        {id == ele.b_author_id ? (
          <div className="flex gap-5 py-2 justify-center">
           <UpdateBlogButton blog={ele} get_all_blogs={get_all_blogs}/>
          <DeleteBlog blog_id={ele.b_id} get_all_blogs={get_all_blogs}/>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
