"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const userRouter = express_1.default.Router();
// User Routes
userRouter.post("/add/user", user_controller_1.addUser);
userRouter.get("/get/user", user_controller_1.getUser);
userRouter.get('/get/users', user_controller_1.getAllUsers);
exports.default = userRouter;
