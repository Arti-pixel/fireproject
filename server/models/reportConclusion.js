const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const { General } = require("./general");

const ReportConclusion = sequelize.define(
  "report_conclusion",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },

    violationsOfSafetyRegulations: {
      type: DataTypes.TEXT,
    },

    diedByViolation: {
      type: DataTypes.STRING,
    },

    traumatizedByViolation: {
      type: DataTypes.STRING,
    },

    conclusionAndProposals: {
      type: DataTypes.TEXT,
    },

    fullName: {
      type: DataTypes.STRING,
    },

    reportDate: {
      type: DataTypes.DATEONLY,
    },

    hasComments: {
      type: DataTypes.BOOLEAN,
    },
  },
  { timestamps: false }
);

const ReportConclusionComment = sequelize.define(
  "report_conclusion_comment",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },
    violationsOfSafetyRegulationsComment: {
      type: DataTypes.TEXT,
    },

    diedByViolationComment: {
      type: DataTypes.TEXT,
    },

    traumatizedByViolationComment: {
      type: DataTypes.TEXT,
    },

    conclusionAndProposalsComment: {
      type: DataTypes.TEXT,
    },

    fullNameComment: {
      type: DataTypes.TEXT,
    },

    reportDateComment: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);

module.exports = {
  ReportConclusion,
  ReportConclusionComment,
};
