const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const { General } = require("./general");

const FireTimeindicators = sequelize.define(
  "fire_timeindicators",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },
    fireOccurrenceTime: {
      type: DataTypes.TIME,
    },
    fireOccurrenceSq: {
      type: DataTypes.STRING,
    },

    fireDetectionTime: {
      type: DataTypes.TIME,
    },
    fireDetectionSq: {
      type: DataTypes.STRING,
    },

    fireMessageTime: {
      type: DataTypes.TIME,
    },
    fireMessageSq: {
      type: DataTypes.STRING,
    },

    departureTime: {
      type: DataTypes.TIME,
    },

    fireArrivalTime: {
      type: DataTypes.TIME,
    },
    fireArrivalSq: {
      type: DataTypes.STRING,
    },

    firstBarrelTime: {
      type: DataTypes.TIME,
    },
    firstBarrelSq: {
      type: DataTypes.STRING,
    },

    additionalForcesTime: {
      type: DataTypes.TIME,
    },
    additionalForcesSq: {
      type: DataTypes.STRING,
    },

    localizationTime: {
      type: DataTypes.TIME,
    },
    localizationSq: {
      type: DataTypes.STRING,
    },

    openFireEliminationTime: {
      type: DataTypes.TIME,
    },
    openFireEliminationSq: {
      type: DataTypes.STRING,
    },

    fireConsequencesEliminationTime: {
      type: DataTypes.TIME,
    },

    firestationReturnTime: {
      type: DataTypes.TIME,
    },

    hasComments: {
      type: DataTypes.BOOLEAN,
    },
  },
  { timestamps: false }
);

const FireTimeindicatorsComment = sequelize.define(
  "fire_timeindicators_comment",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },

    fireOccurrenceComment: {
      type: DataTypes.TEXT,
    },

    fireDetectionComment: {
      type: DataTypes.TEXT,
    },

    fireMessageComment: {
      type: DataTypes.TEXT,
    },

    departureTimeComment: {
      type: DataTypes.TEXT,
    },

    fireArrivalComment: {
      type: DataTypes.TEXT,
    },

    firstBarrelComment: {
      type: DataTypes.TEXT,
    },

    additionalForcesComment: {
      type: DataTypes.TEXT,
    },

    localizationComment: {
      type: DataTypes.TEXT,
    },

    openFireEliminationComment: {
      type: DataTypes.TEXT,
    },

    fireConsequencesEliminationComment: {
      type: DataTypes.TEXT,
    },

    firestationReturnComment: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);

module.exports = {
  FireTimeindicators,
  FireTimeindicatorsComment,
};
