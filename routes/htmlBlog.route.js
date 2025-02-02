import express from "express";
import {
  getHtmlBlog,
  postHtmlBlog,
  putHtmlBlog,
  deleteHtmlBlog,
} from "../controller/htmlBlog.controller.js";

const htmlBlogRouter = express.Router();

htmlBlogRouter.get("/", getHtmlBlog);
htmlBlogRouter.post("/", postHtmlBlog);
htmlBlogRouter.put("/:id", putHtmlBlog);
htmlBlogRouter.delete("/:id", deleteHtmlBlog);

export default htmlBlogRouter;
