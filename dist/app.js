"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sequelize_1 = require("sequelize");
const user_model_1 = __importDefault(require("./models/user.model"));
const post_model_1 = __importDefault(require("./models/post.model"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const post_route_1 = __importDefault(require("./routes/post.route"));
require("dotenv").config();
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "*",
    credentials: true,
}));
// Sequelize configuration
const connectionString = process.env.connectionString || "";
const sequelize = new sequelize_1.Sequelize(connectionString, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
});
// Initialize models
user_model_1.default.initialize(sequelize);
post_model_1.default.initialize(sequelize);
// Define associations (if any)
user_model_1.default.hasMany(post_model_1.default, { foreignKey: "userId" });
post_model_1.default.belongsTo(user_model_1.default, { foreignKey: "userId" });
sequelize
    .sync({ force: false })
    .then(() => {
    console.log("Database & tables synced");
})
    .catch((error) => {
    console.error("Error syncing database:", error);
});
// Routes
app.use("/users", user_route_1.default);
app.use("/posts", post_route_1.default);
const PORT = process.env.PORT || 5151;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
