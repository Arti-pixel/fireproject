const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const { General } = require("./general");

const ApplicationImage = sequelize.define(
  "application_image",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },
    applicationImageId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    imageSignature: {
      type: DataTypes.STRING,
    },

    applicationImage: {
      type: DataTypes.STRING,
    },

    hasComments: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["applicationImageId"],
      },
    ],
  }
);

const ApplicationImageComment = sequelize.define(
  "application_image_comment",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },

    applicationImageId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: ApplicationImage,
        key: "applicationImageId",
      },
    },

    imageSignatureComment: {
      type: DataTypes.TEXT,
    },

    applicationImageComment: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = {
  ApplicationImage,
  ApplicationImageComment,
};
