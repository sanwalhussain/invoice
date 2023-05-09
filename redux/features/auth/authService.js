import axios from "axios";
import { signIn } from "next-auth/react";
const API_URL = "/api/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);

  if (response.data) {
    await signIn("credentials", {
      callbackUrl: "/invoice",
      email: response.data.user.email,
      password: response.data.user.password,
      isRegister: true,
    });
  }
};

// Login user
const login = async (userData) => {
  const data = await signIn("credentials", {
    callbackUrl: "/invoice",
    email: userData.email,
    password: userData.password,
    redirect: false,
  }).then((data) => data);
  return data;
};

const authService = {
  register,
  login,
};

export default authService;
