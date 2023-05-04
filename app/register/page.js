"use client";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/auth/authSlice";
import BeatLoader from "react-spinners/BeatLoader";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const { data } = useSession();
  const { push } = useRouter();
  const { isError, isLoading, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (data && data.user) {
      // redirect to invoice page if login successful
      push("/invoice");
    }
  }, [data]);

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };
  return (
    <div className="min-h-full h-screen px-6 py-28 lg:px-8 bg-background">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Register your account
        </h2>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                {...register("email")}
                className={`block w-full rounded-md p-2 text-white ${
                  isError && "outline outline-1 outline-red-500"
                } shadow-sm bg-inputBg focus:outline outline-1 outline-primary placeholder:text-gray-400 sm:text-sm sm:leading-6`}
              />
              {isError && <small className="text-red-500">{message}</small>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                {...register("password")}
                className={`block w-full rounded-md p-2 text-white ${
                  isError && "outline outline-1 outline-red-500"
                } shadow-sm bg-inputBg focus:outline outline-1 outline-primary placeholder:text-gray-400 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-primary h-10 px-3 text-sm leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLoading ? <BeatLoader color="white" size={10} /> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
