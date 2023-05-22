const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const { General } = require("./general");

const FireOthers = sequelize.define(
  "fire_others",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },
    serviceInteraction: {
      type: DataTypes.STRING,
    },
    notArrivedServices: {
      type: DataTypes.TEXT,
    },
    fireEquipmentMalfunction: {
      type: DataTypes.TEXT,
    },
    fireCauseAndCulprit: {
      type: DataTypes.TEXT,
    },
    hasComments: {
      type: DataTypes.BOOLEAN,
    },
  },
  { timestamps: false }
);

const FireOthersComment = sequelize.define(
  "fire_others_comment",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },

    serviceInteractionComment: {
      type: DataTypes.STRING,
    },
    notArrivedServicesComment: {
      type: DataTypes.TEXT,
    },
    fireEquipmentMalfunctionComment: {
      type: DataTypes.TEXT,
    },
    fireCauseAndCulpritComment: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);

module.exports = {
  FireOthers,
  FireOthersComment,
};
