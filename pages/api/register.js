import User from "../../models/user";
import dbConnect from "../../config/dbConnect";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    dbConnect();

    const { email, password } = req.body;

    if (!email || !password) {
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
  }
}
