import express from "express";
import {
  deleteUsers,
  getUsers,
  postUsers,
  putUsers,
} from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", postUsers);
userRouter.put("/:id", putUsers);
userRouter.delete("/:id", deleteUsers);

export default userRouter;
