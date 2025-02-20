import { model, Schema } from "mongoose";

const blogSchema = new Schema(
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

const blogModel = model("htmlBlog", blogSchema);

export default blogModel;
