import { registerUser } from "@/controllers/auth/registerController";

export default async function handler(req, res) {
  if (req.method === "POST") {
    registerUser(req, res);
  }
}
