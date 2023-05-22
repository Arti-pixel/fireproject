const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const { General } = require("./general");

const FireSituation = sequelize.define(
  "fire_situation",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },

    fireSituation: {
      type: DataTypes.TEXT,
    },

    hasComments: {
      type: DataTypes.BOOLEAN,
    },
  },
  { timestamps: false }
);

const FireSituationComment = sequelize.define(
  "fire_situation_comment",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },

    fireSituationComment: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);

module.exports = {
  FireSituation,
  FireSituationComment,
};
