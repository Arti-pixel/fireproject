const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const { General } = require("./general");

const FireResults = sequelize.define(
  "fire_results",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },

    savedPeople: {
      type: DataTypes.STRING,
    },
    savedChildren: {
      type: DataTypes.STRING,
    },
    savedByFirefighter: {
      type: DataTypes.STRING,
    },
    savedByVolunteers: {
      type: DataTypes.STRING,
    },
    savedByPeople: {
      type: DataTypes.STRING,
    },
    savedByServicePersonnel: {
      type: DataTypes.STRING,
    },
    savedByRescuers: {
      type: DataTypes.STRING,
    },
    diedInAFire: {
      type: DataTypes.STRING,
    },
    traumatizedPeople: {
      type: DataTypes.STRING,
    },
    destroyedBuildings: {
      type: DataTypes.STRING,
    },
    animalsDied: {
      type: DataTypes.STRING,
    },
    amountOfDamageByFire: {
      type: DataTypes.STRING,
    },
    totalValueOfSalvagedProperty: {
      type: DataTypes.STRING,
    },
    fireExtinguishingAgentsConsumed: {
      type: DataTypes.STRING,
    },
    hasComments: {
      type: DataTypes.BOOLEAN,
    },
  },
  { timestamps: false }
);

const FireResultsComment = sequelize.define(
  "fire_results_comment",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },
    savedPeopleComment: {
      type: DataTypes.TEXT,
    },
    savedByFirefighterComment: {
      type: DataTypes.TEXT,
    },
    savedByVolunteersComment: {
      type: DataTypes.TEXT,
    },
    savedByPeopleComment: {
      type: DataTypes.TEXT,
    },
    savedByServicePersonnelComment: {
      type: DataTypes.TEXT,
    },
    savedByRescuersComment: {
      type: DataTypes.TEXT,
    },
    diedInAFireComment: {
      type: DataTypes.TEXT,
    },
    traumatizedPeopleComment: {
      type: DataTypes.TEXT,
    },
    destroyedBuildingsComment: {
      type: DataTypes.TEXT,
    },
    animalsDiedComment: {
      type: DataTypes.TEXT,
    },
    amountOfDamageByFireComment: {
      type: DataTypes.TEXT,
    },
    totalValueOfSalvagedPropertyComment: {
      type: DataTypes.TEXT,
    },
    fireExtinguishingAgentsConsumedComment: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);

module.exports = {
  FireResults,
  FireResultsComment,
};
