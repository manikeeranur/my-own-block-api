// import { model, Schema } from "mongoose";

// const htmlBlogSchema = new Schema({
//   heading: Schema.Types.Mixed,
//   content: Schema.Types.Mixed,
//   example: { type: String, default: "" },
//   menuName: { type: String, default: "" },
// });

// const htmlBlogModel = model("htmlBlog", htmlBlogSchema);

// export default htmlBlogModel;

import { model, Schema } from "mongoose";

const htmlBlogSchema = new Schema(
  {
    heading: Schema.Types.Mixed,
    content: Schema.Types.Mixed,
    example: { type: String, default: "" },
    menuName: { type: String, default: "" },
    contentType: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const htmlBlogModel = model("htmlBlog", htmlBlogSchema);

export default htmlBlogModel;
