const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const { General } = require("./general");

const WaterSupply = sequelize.define(
  "water_supply",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },

    waterSupplyСharacteristic: {
      type: DataTypes.TEXT,
    },

    waterSupplyFromTank: {
      type: DataTypes.TEXT,
    },

    waterSupplyWithWaterSource: {
      type: DataTypes.TEXT,
    },

    waterDelivery: {
      type: DataTypes.TEXT,
    },

    waterSupplyToPumping: {
      type: DataTypes.TEXT,
    },
    hasComments: {
      type: DataTypes.BOOLEAN,
    },
  },
  { timestamps: false }
);

const WaterSupplyComment = sequelize.define(
  "water_supply_comment",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },

    waterSupplyСharacteristicComment: {
      type: DataTypes.TEXT,
    },

    waterSupplyFromTankComment: {
      type: DataTypes.TEXT,
    },

    waterSupplyWithWaterSourceComment: {
      type: DataTypes.TEXT,
    },

    waterDeliveryComment: {
      type: DataTypes.TEXT,
    },

    waterSupplyToPumpingComment: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);

module.exports = {
  WaterSupply,
  WaterSupplyComment,
};
