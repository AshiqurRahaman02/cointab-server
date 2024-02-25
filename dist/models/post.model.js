"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Post extends sequelize_1.Model {
    static initialize(sequelize) {
        return super.init({
            post_id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            userId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            title: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            body: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'Post',
        });
    }
}
exports.default = Post;
