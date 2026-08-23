import React, { useEffect, useState } from "react";
import DeleteProfileComponent from "./../components/DeleteProfile.jsx";
import { getUserProfile } from "../APIS/profile/user_profile.js";
import { useAuth } from "../components/context/AuthContext.jsx";
import MyBlogs from "../components/blog/MyBlogs.jsx";
import { updateProfile } from "../APIS/profile/updateProfile.js";

export default function Profile() {
  const [userProfile, setUserProfile] = useState({});
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [editDOB, setEditDOB] = useState(false);
  const [editGender, setEditGender] = useState(false);
  const { id } = useAuth();

  async function getProfile() {
    try {
      const result = await getUserProfile(id);

      console.log(result);

      if (result?.status === 200) {
        const user = result.data[0];

        setUserProfile(user);

        setDOB(user?.u_DOB || "");
        setGender(user?.u_gender || "");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async function updateUserProfile() {
    try {
      const data = {
        DOB,
        gender,
      };
      console.log(data);

      const result = await updateProfile(id, data);

      console.log(result);

      if (result?.status === 200) {
        await getProfile();

        setEditDOB(false);
        setEditGender(false);
      }
    } catch (error) {
      console.log("Update error:", error?.response?.data?.error_message);
    }
  }

  useEffect(() => {
    if (id) {
      getProfile();
    }
  }, [id]);

  return (
    <>
      <div className="text-amber-800 py-5 flex flex-col text-center md:flex-row justify-between md:w-[70%] mx-auto">
        <h2 className="font-bold text-xl">Your personal details:</h2>

        <div className="font-bold flex gap-3 flex-col">
          <h3>
            Your fullname:
            <span className="font-normal"> {userProfile?.fullname}</span>
          </h3>

          <h3>
            Your email:
            <span className="font-normal"> {userProfile?.u_email}</span>
          </h3>

          <h3>
            Your age:
            <span className="font-normal"> {userProfile?.age}</span>
            <button
              onClick={() => {
               
                setDOB(userProfile?.u_DOB || "");
                setGender(userProfile?.u_gender || "");
                setEditDOB(true);
              }}
              className="bg-amber-800 ms-2 border-2 border-amber-800 text-white p-1 rounded-md cursor-pointer hover:bg-[#EAC79F] hover:text-amber-800 transition-all duration-500"
            >
              Edit
            </button>
          </h3>

          {editDOB && (
            <div className="flex justify-center items-center gap-2">
              <input
                type="date"
                value={DOB ? DOB.substring(0, 10) : ""}
                onChange={(e) => setDOB(e.target.value)}
                className="border focus:outline-none focus:ring-1 focus:ring-amber-800 border-amber-800 rounded-md px-2 py-1"
              />

              <button
              onClick={updateUserProfile}
                className="bg-amber-800 text-white p-1 px-3 rounded-md cursor-pointer"
              >
                Save
              </button>

              <button
                onClick={() => setEditDOB(false)}
                className="border border-gray-400 bg-gray-400 text-white p-1 px-3 rounded-md cursor-pointer"
              >
                Cancel
              </button>
            </div>
          )}

          <h3>
            Your gender:
            <span className="font-normal"> {userProfile?.u_gender}</span>
            <button
                onClick={() => {
                setDOB(userProfile?.u_DOB || "");
                setGender(userProfile?.u_gender || "");
                setEditGender(true);
              }}
              className="bg-amber-800 ms-2 border-2 border-amber-800 text-white p-1 rounded-md cursor-pointer hover:bg-[#EAC79F] hover:text-amber-800 transition-all duration-500"
            >
              Edit
            </button>
          </h3>

          {editGender && (
            <div className="flex justify-center items-center gap-2">
              <div className="border-2 rounded-md">
                <button className=" border-amber-800 bg-[#EAC79F] rounded-md px-3 py-1">
                 {gender || "Select gender"}
                </button>

                <div className=" mt-1 w-full rounded-md border border-amber-800 bg-[#EAC79F]">
                  <button
                    type="button"
                    onClick={() => setGender("male")}
                    className="px-3 py-2 cursor-pointer hover:bg-amber-800 hover:text-white"
                  >
                    Male
                  </button>

                  <button
                    type="button"
                    onClick={() => setGender("female")}
                    className="px-3 py-2 cursor-pointer hover:bg-amber-800 hover:text-white"
                  >
                    Female
                  </button>
                </div>
              </div>

              <button
              onClick={updateUserProfile}
                className="bg-amber-800 text-white p-1 px-3 rounded-md cursor-pointer"
              >
                Save
              </button>

              <button
                onClick={() => setEditGender(false)}
                className="border border-gray-400 bg-gray-400 text-white p-1 px-3 rounded-md cursor-pointer"
              >
                Cancel
              </button>
            </div>
          )}
          <DeleteProfileComponent />
        </div>
      </div>
      <div>
        <h2 className="text-xl text-amber-800 font-bold flex justify-center">
          Your Blogs
        </h2>
      </div>
      <MyBlogs />
    </>
  );
}
