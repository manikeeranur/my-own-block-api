import express from "express";
import {
  getHtmlBlogOnly,
  getCssBlogOnly,
  getJavascriptBlogOnly,
  getBootstrapBlogOnly,
  getReactJsBlogOnly,
  getSQLBlogOnly,
  getJavaBlogOnly,
  getAllBlog,
  postBlog,
  putBlog,
  deleteBlog,
  getBlogById,
  SearchBlogHeading,
  getFEInterviewQuestions,
} from "../controller/blog.controller.js";
import authenticateJWT from "../middleware/authMiddleware.js";

const blogRouter = express.Router();

blogRouter.get("/html", getHtmlBlogOnly);
blogRouter.get("/css", getCssBlogOnly);
blogRouter.get("/bootstrap", getBootstrapBlogOnly);
blogRouter.get("/js", getJavascriptBlogOnly);
blogRouter.get("/reactjs", getReactJsBlogOnly);
blogRouter.get("/sql", getSQLBlogOnly);
blogRouter.get("/java", getJavaBlogOnly);
blogRouter.get("/fei", getFEInterviewQuestions);
blogRouter.get("/search", SearchBlogHeading);
blogRouter.get("/", getAllBlog);
blogRouter.post("/", authenticateJWT, postBlog);
blogRouter.get("/:id", getBlogById);
blogRouter.put("/:id", putBlog);
blogRouter.delete("/:id", deleteBlog);

export default blogRouter;
