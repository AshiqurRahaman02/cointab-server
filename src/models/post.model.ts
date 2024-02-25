import { DataTypes, Model, Sequelize } from 'sequelize';

interface PostAttributes {
  post_id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostCreationAttributes extends PostAttributes {}

class Post extends Model<PostAttributes, PostCreationAttributes> implements PostAttributes {
  public post_id!: number;
  public userId!: number;
  public title!: string;
  public body!: string;

  static initialize(sequelize: Sequelize) {
    return super.init(
      {
        post_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        body: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Post',
      }
    );
  }
}

export default Post;
