const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const blogController = require("../controllers/blog");

//[POST] : /v1/blog/post
router.post(
  "/post",
  [
    body("title").isLength({ min: 5 }).withMessage("Input title tidak sesuai"),
    body("body").isLength({ min: 5 }).withMessage("Input body tidak sesuai"),
  ],
  blogController.createBlogPost
);

//GET All Post
router.get("/posts", blogController.getAllBlogPost);

//GET Post By Id
router.get("/post/:postId", blogController.getBlogPostById);

//Update Post By Id
router.put(
  "/post/:postId",
  [
    body("title").isLength({ min: 5 }).withMessage("Input title tidak sesuai"),
    body("body").isLength({ min: 5 }).withMessage("Input body tidak sesuai"),
  ],
  blogController.updateBlogPost
);

router.delete("/post/:postId", blogController.deleteBlogPost);

module.exports = router;
