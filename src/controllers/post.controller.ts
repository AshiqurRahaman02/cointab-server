import { Request, Response } from "express";
import * as sql from "mssql";
import dbConfig from "../config/db.config";
import Post from "../models/post.model";

export const addPosts = async (req: Request, res: Response) => {
	try {
		const { userId, posts } = req.body;

		const existingPosts = await Post.findAll({ where: { userId } });

		if (existingPosts.length > 0) {
			return res.status(400).json({
				isError: true,
				message: "Posts already exist for this user",
			});
		}

		const newPosts = posts.map((post: any) => ({ ...post, userId }));
		await Post.bulkCreate(newPosts);

		res.status(201).json({
			isError: false,
			message: "Posts added successfully",
		});
	} catch (error) {
		console.error("Error adding posts:", error);
		res.status(500).json({ isError: true, message: "Internal Server Error" });
	}
};

export const checkUserPost = async (req: Request, res: Response) => {
	try {
		const userId = req.query.user_id as string;

		const existingPosts = await Post.findAll({
			where: { userId },
		});

		if (existingPosts.length > 0) {
			return res
				.status(200)
				.json({ isError: false, message: "User posts exists" });
		} else {
			return res.status(200).json({ isError: true, message:"User posts don't existis" });
		}
	} catch (error: any) {
		console.error("Error checking existing user posts:", error.message);
		res.status(500).json({ isError: true, message: "Internal Server Error" });
	}
};
