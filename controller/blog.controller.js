import htmlBlogModel from "../models/blog.models.js";

export const getAllBlog = async (req, res) => {
  try {
    const data = await htmlBlogModel.find();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getHtmlBlogOnly = async (req, res) => {
  try {
    const data = await htmlBlogModel.find({ contentType: "HTML" });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getCssBlogOnly = async (req, res) => {
  try {
    const data = await htmlBlogModel.find({ contentType: "CSS" });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getJavascriptBlogOnly = async (req, res) => {
  try {
    const data = await htmlBlogModel.find({ contentType: "Javascript" });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// export const getJavascriptBlogOnly = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1; // Default page is 1
//     const limit = parseInt(req.query.limit) || 10; // Default limit is 10
//     const skip = (page - 1) * limit; // Calculate the number of documents to skip

//     const data = await htmlBlogModel
//       .find({ contentType: "Javascript" })
//       .skip(skip)
//       .limit(limit);

//     const total = await htmlBlogModel.countDocuments({
//       contentType: "Javascript",
//     }); // Total count of JavaScript blogs
//     const totalPages = Math.ceil(total / limit);

//     return res.status(200).json({
//       page,
//       totalPages,
//       totalItems: total,
//       data,
//     });
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// };

export const getBootstrapBlogOnly = async (req, res) => {
  try {
    const data = await htmlBlogModel.find({ contentType: "Bootstrap" });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getReactJsBlogOnly = async (req, res) => {
  try {
    const data = await htmlBlogModel.find({ contentType: "ReactJs" });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getSQLBlogOnly = async (req, res) => {
  try {
    const data = await htmlBlogModel.find({ contentType: "SQL" });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getJavaBlogOnly = async (req, res) => {
  try {
    const data = await htmlBlogModel.find({ contentType: "Java" });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const postBlog = async (req, res) => {
  const newHtmlBlog = new htmlBlogModel({
    contentType: req.body.contentType,
    heading: req.body.heading,
    content: req.body.content,
    example: req.body.example,
    menuName: req.body.menuName,
  });

  try {
    const response = await newHtmlBlog.save();
    return res.status(201).json(response);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// Update blog data by ID
export const putBlog = async (req, res) => {
  const { id } = req.params; // Get the blog post ID from the URL params
  const { contentType, heading, content, example, menuName } = req.body; // Get the updated data from the body

  try {
    const updatedBlog = await htmlBlogModel.findByIdAndUpdate(
      id,
      { contentType, heading, content, example, menuName },
      { new: true } // Return the updated document
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res.status(200).json(updatedBlog);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// Delete blog data by ID
export const deleteBlog = async (req, res) => {
  const { id } = req.params; // Get the blog post ID from the URL params

  try {
    const deletedBlog = await htmlBlogModel.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getBlogById = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await htmlBlogModel.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res.status(200).json(blog);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
