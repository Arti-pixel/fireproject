const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const { General } = require("./general");

const ActionsEvaluation = sequelize.define(
  "actions_evaluation",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },

    firstFireExtinguishingCompany: {
      type: DataTypes.TEXT,
    },

    secondFireExtinguishingCompany: {
      type: DataTypes.TEXT,
    },

    thirdAndNextFireExtinguishingCompanies: {
      type: DataTypes.TEXT,
    },

    chiefsOfTheCombatAreas: {
      type: DataTypes.TEXT,
    },

    fireDepartments: {
      type: DataTypes.TEXT,
    },

    hasComments: {
      type: DataTypes.BOOLEAN,
    },
  },
  { timestamps: false }
);

const ActionsEvaluationComment = sequelize.define(
  "actions_evaluation_comment",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },

    firstFireExtinguishingCompanyComment: {
      type: DataTypes.TEXT,
    },

    secondFireExtinguishingCompanyComment: {
      type: DataTypes.TEXT,
    },

    thirdAndNextFireExtinguishingCompaniesComment: {
      type: DataTypes.TEXT,
    },

    chiefsOfTheCombatAreasComment: {
      type: DataTypes.TEXT,
    },

    fireDepartmentsComment: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);

module.exports = {
  ActionsEvaluation,
  ActionsEvaluationComment,
};
