"use client";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { BeatLoader } from "react-spinners";
const LoginPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [isError, setError] = useState(false);
  const { data } = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (data && data.user) {
      // redirect to invoice page if login successful
      push("/invoice");
    }
  }, [data]);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setError(false);
    // login user with error handling
    await signIn("credentials", {
      callbackUrl: "/invoice",
      email: data.email,
      password: data.password,
      redirect: false,
    }).then((data) => {
      if (data) {
        setLoading(false);
      }

      if (data.error) {
        // display alert
        setError(true);
        // set error message
        setMessage(data.error);
      }
      if (data.ok) {
        // remove alert
        setError(false);
        //remove error message
        setMessage(null);
      }
    });
  };

  return (
    <div className="min-h-full h-screen px-6 py-28 lg:px-8 bg-background">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=violet&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm leading-6 text-white"
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
                className="block text-sm  leading-6 text-white"
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
              className="flex items-center w-full justify-center rounded-md bg-primary h-10 text-sm leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLoading ? <BeatLoader color="white" size={10} /> : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
