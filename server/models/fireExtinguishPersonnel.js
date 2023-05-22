const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const { General } = require("./general");

const FireExtinguishPersonnel = sequelize.define(
  "fire_extinguish_personnel",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },

    fireExtinguishPersonnel: {
      type: DataTypes.TEXT,
    },

    fireExtinguishTech: {
      type: DataTypes.TEXT,
    },

    fireExtinguishWithGasAndSmokeProtectionService: {
      type: DataTypes.TEXT,
    },

    OnesquadOfFirefighters: {
      type: DataTypes.STRING,
    },

    TwosquadOfFirefighters: {
      type: DataTypes.STRING,
    },

    hasComments: {
      type: DataTypes.BOOLEAN,
    },
  },
  { timestamps: false }
);

const FireExtinguishPersonnelComment = sequelize.define(
  "fire_extinguish_personnel_comment",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },

    fireExtinguishPersonnelComment: {
      type: DataTypes.TEXT,
    },

    fireExtinguishTechComment: {
      type: DataTypes.TEXT,
    },

    fireExtinguishWithGasAndSmokeProtectionServiceComment: {
      type: DataTypes.TEXT,
    },

    OnesquadOfFirefightersComment: {
      type: DataTypes.TEXT,
    },

    TwosquadOfFirefightersComment: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);

module.exports = {
  FireExtinguishPersonnel,
  FireExtinguishPersonnelComment,
};
