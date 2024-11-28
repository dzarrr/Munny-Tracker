import express from "express";

const router = express.Router();

// Get all posts
router.get("/", (req, res, next) => {
  res.status(200).json({
    msg: "success",
  });
});

// // Get single post
// router.get("/:id", getPost);

// // Create new post
// router.post("/", createPost);

// // Update Post
// router.put("/:id", updatePost);

// // Delete Post
// router.delete("/:id", deletePost);

export default router;
