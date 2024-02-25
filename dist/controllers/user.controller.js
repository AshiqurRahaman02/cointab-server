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
exports.getAllUsers = exports.getUser = exports.addUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Checking if user with the same user_id exists or not
        const existingUser = yield user_model_1.default.findOne({
            where: { user_id: req.body.user_id },
        });
        if (existingUser) {
            return res
                .status(409)
                .json({ isError: true, message: "User already exists" });
        }
        else {
            const newUser = yield user_model_1.default.create(req.body);
            return res.status(201).json({
                isError: false,
                message: "User added successfully",
                newUser,
            });
        }
    }
    catch (error) {
        console.error("Error adding user:", error);
        return res
            .status(500)
            .json({ isError: true, message: "Internal Server Error" });
    }
});
exports.addUser = addUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.query.user_id;
        const existingUser = yield user_model_1.default.findOne({
            where: { user_id: userId },
        });
        if (existingUser) {
            return res
                .status(200)
                .json({ isError: false, message: "User already exists" });
        }
        else {
            return res.status(409).json({ isError: true });
        }
    }
    catch (error) {
        console.error("Error fetching user:", error);
        return res
            .status(500)
            .json({ isError: true, message: "Internal Server Error" });
    }
});
exports.getUser = getUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.findAll();
        res.status(200).json({ isError: false, users });
    }
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            isError: true,
            message: "Internal Server Error",
        });
    }
});
exports.getAllUsers = getAllUsers;
