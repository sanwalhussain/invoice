import dbConnect from "@/config/dbConnect";
import User from "../../models/user";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  dbConnect();

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please add all fields" });
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    email,
    password: hashedPassword,
  });

  res.status(201).json({ user });
};
