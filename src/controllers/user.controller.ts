import { Request, Response } from "express";
import * as sql from "mssql";
import dbConfig from "../config/db.config";
import User from "../models/user.model";

export const addUser = async (req: Request, res: Response) => {
	try {
		// Checking if user with the same user_id exists or not
		const existingUser = await User.findOne({
			where: { user_id: req.body.user_id },
		});

		if (existingUser) {
			return res
				.status(409)
				.json({ isError: true, message: "User already exists" });
		} else {
			const newUser = await User.create(req.body);
			return res.status(201).json({
				isError: false,
				message: "User added successfully",
				newUser,
			});
		}
	} catch (error) {
		console.error("Error adding user:", error);
		return res
			.status(500)
			.json({ isError: true, message: "Internal Server Error" });
	}
};

export const getUser = async (req: Request, res: Response) => {
	try {
		const userId = req.query.user_id as string;

		const existingUser = await User.findOne({
			where: { user_id: userId },
		});

		if (existingUser) {
			return res
				.status(200)
				.json({ isError: false, message: "User already exists" });
		} else {
			return res.status(409).json({ isError: true });
		}
	} catch (error) {
		console.error("Error fetching user:", error);
		return res
			.status(500)
			.json({ isError: true, message: "Internal Server Error" });
	}
};

export const getAllUsers = async (req: Request, res: Response) => {
	try {
		const users = await User.findAll();

		res.status(200).json({ isError: false, users });
	} catch (error) {
		console.error("Error fetching users:", error);
		res.status(500).json({
			isError: true,
			message: "Internal Server Error",
		});
	}
};
