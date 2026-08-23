import React, { useState } from "react";
import  { updateUserBlog } from './../../APIS/blog/updateBlog.js'


export default function UpdateBlogButton({ blog, get_all_blogs }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(blog.b_title);
  const [content, setContent] = useState(blog.b_content);

  async function updateBlog(e) {
    e.preventDefault();

    try {
      const formData = {
        title,
        content,
      };

      const result = await updateUserBlog(blog.b_id, formData);

      console.log(result);

      setOpen(false);
      get_all_blogs();
    } catch (error) {
      console.log(error?.response?.data?.error_message);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          console.log("Update clicked");
          setOpen(true);
        }}
        className="bg-amber-800 border-2 flex gap-1 items-center justify-center border-amber-800 text-white p-1 rounded-md cursor-pointer hover:bg-[#EAC79F] hover:text-amber-800 transition-all duration-500"
      >
        Update
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <form
            onSubmit={updateBlog}
            className="bg-white rounded-lg p-6 w-[90%] md:w-[500px]"
          >
            <h2 className="text-2xl font-bold text-amber-800 mb-4">
              Update Blog
            </h2>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 w-full rounded mb-4"
              placeholder="Blog title"
            />

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border p-2 w-full rounded mb-4 h-40"
              placeholder="Blog content"
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="bg-amber-800 text-white px-4 py-2 rounded cursor-pointer"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
