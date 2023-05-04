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

const authService = {
  register,
};

export default authService;
