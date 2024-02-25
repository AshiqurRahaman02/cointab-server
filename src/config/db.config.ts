import * as sql from "mssql";

require("dotenv").config();
const config: sql.config = {
	user: process.env.sqlUserName,
	password: process.env.sqlPassword,
	server: process.env.sqlServer || "",
	database: process.env.sqlDatabase,
	options: {
		encrypt: true,
	},
};

export default config;
