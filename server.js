import express from "express";
import connectDB from "./lib/db.js";
import userRouter from "./routes/users.route.js";
import htmlBlogRouter from "./routes/htmlBlog.route.js";
import cors from "cors";
const app = express();
const PORT = 3001;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "Hello, World!" });
});

app.use("/users", userRouter);
app.use("/htmlBlog", htmlBlogRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
