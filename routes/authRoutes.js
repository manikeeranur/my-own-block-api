import express from "express";
import checkAuth, {
  getProfile,
  login,
  signup,
} from "../controller/authController.js";
import authenticateJWT from "../middleware/authMiddleware.js";

const authRoutes = express.Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.get("/profile", authenticateJWT, getProfile);
authRoutes.get("/checkAuth", checkAuth);

export default authRoutes;
