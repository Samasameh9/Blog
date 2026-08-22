import React from "react";
import { useForm } from "react-hook-form";
import { loginApi } from "../APIS/auth/login.js";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../components/context/AuthContext.jsx";


export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const payload = {
        email: data.email,
        password: data.password,
      };
      console.log(payload);
      const result = await loginApi(payload);
      console.log(result);
      if (result?.message == "Done") {
        login(result.data.u_id);
        reset();
        navigate("/home");
      } else {
        toast.error("Incorrect email or password");
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
        <div className="h-lvh flex justify-center items-center text-amber-800  ">
          <div className=" rounded-md flex flex-col justify-center item-center gap-2 p-10 hover:scale-105 duration-500 transition-all shadow-2xl w-full md:w-1/2 bg-[#EDE9E9]">
            <h2 className="text-xl text-center font-medium">Login now</h2>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded-md p-2"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors?.email?.message}</p>
            )}
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="border rounded-md p-2"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
                  message:
                    "Password must contain uppercase, lowercase, number, and special character",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors?.password?.message}</p>
            )}
            <button
              type="submit"
              className="bg-amber-800 text-white px-5 py-2 rounded-md hover:bg-amber-900 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
