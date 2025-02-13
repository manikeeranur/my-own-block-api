import htmlBlogModel from "../models/htmlBlog.models.js";

export const getAllBlog = async (req, res) => {
  try {
    const allUsers = await htmlBlogModel.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getHtmlBlogOnly = async (req, res) => {
  try {
    const allUsers = await htmlBlogModel.find({ contentType: "HTML" });
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export const getCssBlogOnly = async (req, res) => {
  try {
    const allUsers = await htmlBlogModel.find({ contentType: "CSS" });
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const postHtmlBlog = async (req, res) => {
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
export const putHtmlBlog = async (req, res) => {
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
export const deleteHtmlBlog = async (req, res) => {
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
