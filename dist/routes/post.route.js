"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("../controllers/post.controller");
const postRouter = express_1.default.Router();
// Post Routes
postRouter.post("/add/posts/", post_controller_1.addPosts);
postRouter.get("/check/posts/", post_controller_1.checkUserPost);
exports.default = postRouter;
