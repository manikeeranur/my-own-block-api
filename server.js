import express from "express";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";
import htmlBlogRouter from "./routes/htmlBlog.route.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
const app = express();
const PORT = 3001;
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "Hello, World!" });
});

// app.use("/users", userRouter);
app.use("/htmlBlog", htmlBlogRouter);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
