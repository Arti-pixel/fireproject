const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const { General } = require("./general");

const ApplicationName = sequelize.define(
  "application_name",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },
    applicationName: {
      type: DataTypes.STRING,
    },

    hasComments: {
      type: DataTypes.BOOLEAN,
    },
  },
  { timestamps: false }
);

const ApplicationNameComment = sequelize.define(
  "application_name_comment",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },

    applicationNameComment: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);

module.exports = {
  ApplicationName,
  ApplicationNameComment,
};
