import express from "express";
import { addUser, getAllUsers, getUser } from "../controllers/user.controller";

const userRouter = express.Router();

// User Routes
userRouter.post("/add/user", addUser);
userRouter.get("/get/user", getUser);
userRouter.get('/get/users', getAllUsers);

export default userRouter;
