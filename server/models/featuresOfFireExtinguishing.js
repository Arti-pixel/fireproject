const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const { General } = require("./general");

const FeaturesOfFireExtinguishing = sequelize.define(
  "features_of_fire_extinguishing",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },

    featuresOfFireExtinguishing: {
      type: DataTypes.TEXT,
    },

    creationOfOperationalHeadquarters: {
      type: DataTypes.TEXT,
    },

    creationOfFireFightingAreas: {
      type: DataTypes.TEXT,
    },

    circumstancesContributingToFireDevelopment: {
      type: DataTypes.TEXT,
    },

    circumstancesComplicatingTheSituation: {
      type: DataTypes.TEXT,
    },

    hasComments: {
      type: DataTypes.BOOLEAN,
    },
  },
  { timestamps: false }
);

const FeaturesOfFireExtinguishingComment = sequelize.define(
  "features_of_fire_extinguishing_comment",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },

    featuresOfFireExtinguishingComment: {
      type: DataTypes.TEXT,
    },

    creationOfOperationalHeadquartersComment: {
      type: DataTypes.TEXT,
    },

    creationOfFireFightingAreasComment: {
      type: DataTypes.TEXT,
    },

    circumstancesContributingToFireDevelopmentComment: {
      type: DataTypes.TEXT,
    },

    circumstancesComplicatingTheSituationComment: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);

module.exports = {
  FeaturesOfFireExtinguishing,
  FeaturesOfFireExtinguishingComment,
};
