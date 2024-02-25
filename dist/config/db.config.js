"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const config = {
    user: process.env.sqlUserName,
    password: process.env.sqlPassword,
    server: process.env.sqlServer || "",
    database: process.env.sqlDatabase,
    options: {
        encrypt: true,
    },
};
exports.default = config;
