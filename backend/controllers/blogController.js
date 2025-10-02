import Blog from "../models/Blog.js";

export const getPosts = async (req, res) => {
  const posts = await Blog.find().populate("author");
  res.json(posts);
};

export const createPost = async (req, res) => {
  try {
    const post = new Blog(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
