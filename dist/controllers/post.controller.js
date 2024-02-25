"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserPost = exports.addPosts = void 0;
const post_model_1 = __importDefault(require("../models/post.model"));
const addPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, posts } = req.body;
        const existingPosts = yield post_model_1.default.findAll({ where: { userId } });
        if (existingPosts.length > 0) {
            return res.status(400).json({
                isError: true,
                message: "Posts already exist for this user",
            });
        }
        const newPosts = posts.map((post) => (Object.assign(Object.assign({}, post), { userId })));
        yield post_model_1.default.bulkCreate(newPosts);
        res.status(201).json({
            isError: false,
            message: "Posts added successfully",
        });
    }
    catch (error) {
        console.error("Error adding posts:", error);
        res.status(500).json({ isError: true, message: "Internal Server Error" });
    }
});
exports.addPosts = addPosts;
const checkUserPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.query.user_id;
        const existingPosts = yield post_model_1.default.findAll({
            where: { userId },
        });
        if (existingPosts.length > 0) {
            return res
                .status(200)
                .json({ isError: false, message: "User posts exists" });
        }
        else {
            return res.status(200).json({ isError: true, message: "User posts don't existis" });
        }
    }
    catch (error) {
        console.error("Error checking existing user posts:", error.message);
        res.status(500).json({ isError: true, message: "Internal Server Error" });
    }
});
exports.checkUserPost = checkUserPost;
