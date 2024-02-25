import express from "express";
import cors from 'cors'
import { Sequelize } from "sequelize";
import User from "./models/user.model";
import Post from "./models/post.model";
import userRoutes from "./routes/user.route";
import postRoutes from "./routes/post.route";
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

// Sequelize configuration
const connectionString = process.env.connectionString || "";

const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
});

// Initialize models
User.initialize(sequelize);
Post.initialize(sequelize);

// Define associations (if any)
User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId" });

sequelize
	.sync({ force: false })
	.then(() => {
		console.log("Database & tables synced");
	})
	.catch((error: Error) => {
		console.error("Error syncing database:", error);
	});

// Routes
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5151;
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
