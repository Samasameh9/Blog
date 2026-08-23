import React from "react";
import { deleteUserBlog } from "../../APIS/blog/deleteBlog.js";
import toast, { Toaster } from "react-hot-toast";

export default function DeleteBlog({ blog_id, get_all_blogs }) {
  async function delete_Blog() {
    try {
      const result = await deleteUserBlog(blog_id);
      console.log(result);
      if (result?.status == 200) {
        toast.success("Blog deleted successfully");
        await get_all_blogs();
      } else {
        toast.error(error?.response?.data?.error_message);
      }
    } catch (error) {
      console.log(error?.response?.data?.error_message);
    }
  }

  return (
    <>
      <Toaster />
      <button
        onClick={delete_Blog}
        className="bg-amber-800 flex gap-1 items-center justify-center border-2 border-amber-800 text-white p-1 rounded-md cursor-pointer hover:bg-[#EAC79F] hover:text-amber-800 transition-all duration-500"
      >
        Delete{" "}
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
            d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
      </button>
    </>
  );
}
