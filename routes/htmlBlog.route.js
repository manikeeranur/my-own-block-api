import express from "express";
import {
  postHtmlBlog,
  putHtmlBlog,
  deleteHtmlBlog,
  getHtmlBlogOnly,
  getCssBlogOnly,
  getAllBlog,
} from "../controller/htmlBlog.controller.js";
import authenticateJWT from "../middleware/authMiddleware.js";

const htmlBlogRouter = express.Router();

htmlBlogRouter.get("/", getAllBlog);
htmlBlogRouter.get("/html", getHtmlBlogOnly);
htmlBlogRouter.get("/css", getCssBlogOnly);
htmlBlogRouter.post("/", authenticateJWT, postHtmlBlog);
htmlBlogRouter.put("/:id", putHtmlBlog);
htmlBlogRouter.delete("/:id", deleteHtmlBlog);

export default htmlBlogRouter;
