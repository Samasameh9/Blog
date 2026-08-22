import React from "react";
import { createBlog } from "../../APIS/blog/createBlog.js";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../context/AuthContext.jsx";

export default function Create_Blog({ get_all_blogs }) {
  const { id } = useAuth();
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (formData) => {
    try {
      const blogData = {
        blog_title: formData.title,
        blog_content: formData.content,
        author_id: id,
      };
      console.log(blogData);
      const result = await createBlog(blogData);
      console.log(result);
      if (result?.message == "Done") {
        toast.success("Blog created successfully");
        reset();
        get_all_blogs();
      } else {
        toast.error("Failed, try again");
      }
    } catch (error) {
      console.log(error?.response?.data);
      toast.error(
        error?.response?.data?.error_message || "Something went wrong",
      );
    }
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col text-amber-800 justify-between items-center gap-2">
          <input
            type="text"
            name="title"
            placeholder="Enter blog title"
            className="border-2 p-2 rounded-md bg-white border-amber-800 w-full md:w-1/2"
            {...register("title", {
              required: "title is required",
            })}
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
          <textarea
            name="content"
            placeholder="Enter blog content"
            className="border-2 p-2 rounded-md bg-white border-amber-800 w-full md:w-1/2"
            {...register("content", {
              required: "content is required",
            })}
          ></textarea>
          {errors.content && (
            <p className="text-red-500">{errors.content.message}</p>
          )}
          <button
            type="submit"
            className="bg-amber-800 flex items-center gap-1 justify-center border-2 border-amber-800 text-white py-1 px-2 rounded-md cursor-pointer hover:bg-[#EAC79F] hover:text-amber-800 transition-all duration-500"
          >
            Post{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
}
