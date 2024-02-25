import express from "express";
import { addPosts, checkUserPost } from "../controllers/post.controller";

const postRouter = express.Router();

// Post Routes
postRouter.post("/add/posts/", addPosts);
postRouter.get("/check/posts/", checkUserPost);

export default postRouter;
