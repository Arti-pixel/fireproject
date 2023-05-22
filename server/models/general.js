const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const { User } = require("./models");

const General = sequelize.define(
  "general_data",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "userId",
      },
    },

    callNumber: {
      type: DataTypes.STRING,
    },

    shift: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    callDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    objectName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    settlement: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    objectCharacteristic: {
      type: DataTypes.TEXT,
    },

    objectDetection: {
      type: DataTypes.TEXT,
    },

    currentState: {
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
        fields: ["cardId"],
      },
    ],
  }
);

const GeneralComment = sequelize.define(
  "general_comment",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },

    callNumberComment: {
      type: DataTypes.TEXT,
    },

    shiftComment: {
      type: DataTypes.TEXT,
    },

    callDateComment: {
      type: DataTypes.TEXT,
    },

    objectNameComment: {
      type: DataTypes.TEXT,
    },

    settlementComment: {
      type: DataTypes.TEXT,
    },

    addressComment: {
      type: DataTypes.TEXT,
    },

    objectCharacteristicComment: {
      type: DataTypes.TEXT,
    },

    objectDetectionComment: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);

module.exports = {
  General,
  GeneralComment,
};
