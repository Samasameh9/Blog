import React from "react";
import { deleteUserProfile } from "../APIS/profile/deleteProfile.js";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthContext.jsx";

export default function DeleteProfileComponent() {
  const { id, logout } = useAuth();
  async function DeleteProfile() {
    const result = await deleteUserProfile(id);
    console.log(result);
    if (result?.status == 200) {
      toast.success("profile deleted successfully");
      logout();
    } else {
      toast.error("failed, try again");
    }
  }

  return (
    <>
      <Toaster />
      <button
        onClick={DeleteProfile}
        className="bg-amber-800 ms-2 border-2 border-amber-800 text-white p-1 rounded-md cursor-pointer hover:bg-[#EAC79F] hover:text-amber-800 transition-all duration-500"
      >
        Delete your profile
      </button>
    </>
  );
}
