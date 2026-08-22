import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { registerApi } from "../APIS/auth/register";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
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
        name: data.name,
        email: data.email,
        password: data.password,
        DOB: data.DOB,
        gender: data.gender,
      };
      console.log(payload);

      const result = await registerApi(payload);
      console.log(result);
      if (result?.message == "Done") {
        toast.success(result?.message);
        reset();
        navigate("/");
      } else {
        toast.error("Error try again");
      }
    } catch (error) {
      console.log(error?.response?.data);
      toast.error(
        error?.response?.data?.error_message || "Something went wrong",
      );
    }
  };
  const email = watch("email");

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="min:h-lvh flex justify-center items-center text-amber-800 mt-5 ">
          <div className=" rounded-md flex flex-col justify-center item-center gap-2 p-3 hover:scale-105 duration-500 transition-all shadow-2xl w-full md:w-1/2 bg-[#EDE9E9]">
            <h2 className="text-xl text-center font-medium">Register now</h2>
            <label htmlFor="name">Fullname:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded-md p-2"
              placeholder="Enter your fulllname"
              {...register("name", {
                required: "Fullname is required",
                pattern: {
                  value: /^[A-Za-z]+(\s[A-Za-z]+){2,}$/,
                  message: "Please enter your first, second, and third name",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500">{errors?.name?.message}</p>
            )}
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
            <label htmlFor="confirmEmail">Confirm email:</label>
            <input
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              className="border rounded-md p-2"
              placeholder="Enter your email again"
              {...register("confirmEmail", {
                required: "Please confirm your email",
                validate: (value) => value === email || "Emails do not match",
              })}
            />
            <p className="text-red-500">{errors?.confirmEmail?.message}</p>
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
       
            <label htmlFor="dob">DOB:</label>
            <input
              type="date"
              id="dob"
              name="DOB"
              className="border rounded-md p-2 "
              placeholder="Enter your date of birth"
              {...register("DOB", {
                required: "Date of birth is required",
              })}
            />
            {errors.DOB && (
              <p className="text-red-500">{errors?.DOB?.message}</p>
            )}
            <div className="flex gap-2">
              <label htmlFor="male">Male</label>
              <input
                value="male"
                type="radio"
                id="male"
                name="gender"
                className="border rounded-md p-2"
                {...register("gender", {
                  required: "Please select your gender",
                })}
              />
              <label htmlFor="female">Female</label>
              <input
                value="female"
                type="radio"
                id="female"
                name="gender"
                className="border rounded-md p-2"
                {...register("gender", {
                  required: "Please select your gender",
                })}
              />
            </div>
            {errors.gender && (
              <p className="text-red-500">{errors?.gender?.message}</p>
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
