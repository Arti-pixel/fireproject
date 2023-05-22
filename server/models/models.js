const sequelize = require("../db.js");
const { DataTypes } = require("sequelize");
const { General, GeneralComment } = require("./general.js");
const {
  FireTimeindicators,
  FireTimeindicatorsComment,
} = require("./fireTimeindicators.js");
const { WaterSupply, WaterSupplyComment } = require("./waterSupply.js");
const { FireSituation, FireSituationComment } = require("./fireSituation.js");
const {
  ActionsEvaluation,
  ActionsEvaluationComment,
} = require("./actionsEvaluation.js");
const {
  FeaturesOfFireExtinguishing,
  FeaturesOfFireExtinguishingComment,
} = require("./featuresOfFireExtinguishing.js");
const {
  FireExtinguishPersonnel,
  FireExtinguishPersonnelComment,
} = require("./fireExtinguishPersonnel.js");
const { FireOthers, FireOthersComment } = require("./fireOthers.js");
const { FireResults, FireResultsComment } = require("./fireResults.js");
const {
  ReportConclusion,
  ReportConclusionComment,
} = require("./reportConclusion.js");
const {
  ApplicationName,
  ApplicationNameComment,
} = require("./applicationName.js");
const {
  ApplicationImage,
  ApplicationImageComment,
} = require("./applicationImage.js");
const { User } = require("./user.js");

//TODO objectCharacteristic и objectDetection- обсудить с заказчиком возможность разбития сущности на составные элементы

User.hasMany(General, { foreignKey: "userId" });
General.belongsTo(User, { foreignKey: "userId" });
General.hasOne(GeneralComment, { foreignKey: "cardId", onDelete: "CASCADE" });
GeneralComment.belongsTo(General, { foreignKey: "cardId" });

General.hasOne(FireTimeindicators, {
  foreignKey: "cardId",
  onDelete: "CASCADE",
});
FireTimeindicators.belongsTo(General, { foreignKey: "cardId" });
General.hasOne(FireTimeindicatorsComment, {
  foreignKey: "cardId",
  onDelete: "CASCADE",
});
FireTimeindicatorsComment.belongsTo(General, { foreignKey: "cardId" });

General.hasOne(WaterSupply, { foreignKey: "cardId", onDelete: "CASCADE" });
WaterSupply.belongsTo(General, { foreignKey: "cardId" });
General.hasOne(WaterSupplyComment, {
  foreignKey: "cardId",
  onDelete: "CASCADE",
});
WaterSupplyComment.belongsTo(General, { foreignKey: "cardId" });

General.hasOne(FireSituation, { foreignKey: "cardId", onDelete: "CASCADE" });
FireSituation.belongsTo(General, { foreignKey: "cardId" });
General.hasOne(FireSituationComment, {
  foreignKey: "cardId",
  onDelete: "CASCADE",
});
FireSituationComment.belongsTo(General, { foreignKey: "cardId" });

General.hasOne(ActionsEvaluation, {
  foreignKey: "cardId",
  onDelete: "CASCADE",
});
ActionsEvaluation.belongsTo(General, { foreignKey: "cardId" });
General.hasOne(ActionsEvaluationComment, {
  foreignKey: "cardId",
  onDelete: "CASCADE",
});
ActionsEvaluationComment.belongsTo(General, { foreignKey: "cardId" });

General.hasOne(FeaturesOfFireExtinguishing, {
  foreignKey: "cardId",
  onDelete: "CASCADE",
});
FeaturesOfFireExtinguishing.belongsTo(General, { foreignKey: "cardId" });
General.hasOne(FeaturesOfFireExtinguishingComment, {
  foreignKey: "cardId",
  onDelete: "CASCADE",
});
FeaturesOfFireExtinguishingComment.belongsTo(General, { foreignKey: "cardId" });

General.hasOne(FireExtinguishPersonnel, {
  foreignKey: "cardId",
  onDelete: "CASCADE",
});
FireExtinguishPersonnel.belongsTo(General, { foreignKey: "cardId" });
General.hasOne(FireExtinguishPersonnelComment, {
  foreignKey: "cardId",
  onDelete: "CASCADE",
});
FireExtinguishPersonnelComment.belongsTo(General, { foreignKey: "cardId" });

General.hasOne(FireOthers, { foreignKey: "cardId", onDelete: "CASCADE" });
FireOthers.belongsTo(General, { foreignKey: "cardId" });
General.hasOne(FireOthersComment, {
  foreignKey: "cardId",
  onDelete: "CASCADE",
});
FireOthersComment.belongsTo(General, { foreignKey: "cardId" });

General.hasOne(FireResults, { foreignKey: "cardId", onDelete: "CASCADE" });
FireResults.belongsTo(General, { foreignKey: "cardId" });
General.hasOne(FireResultsComment, {
  foreignKey: "cardId",
  onDelete: "CASCADE",
});
FireResultsComment.belongsTo(General, { foreignKey: "cardId" });

General.hasOne(ReportConclusion, { foreignKey: "cardId", onDelete: "CASCADE" });
ReportConclusion.belongsTo(General, { foreignKey: "cardId" });
General.hasOne(ReportConclusionComment, {
  foreignKey: "cardId",
  onDelete: "CASCADE",
});
ReportConclusionComment.belongsTo(General, { foreignKey: "cardId" });

General.hasOne(ApplicationName, {
  foreignKey: "cardId",
  onDelete: "CASCADE",
});
ApplicationName.belongsTo(General, { foreignKey: "cardId" });
General.hasOne(ApplicationNameComment, {
  foreignKey: "cardId",
  onDelete: "CASCADE",
});
ApplicationNameComment.belongsTo(General, { foreignKey: "cardId" });

General.hasMany(ApplicationImage, {
  foreignKey: "cardId",
  onDelete: "CASCADE",
});
ApplicationImage.belongsTo(General, { foreignKey: "cardId" });

General.hasMany(ApplicationImageComment, {
  foreignKey: "cardId",
  onDelete: "CASCADE",
});
ApplicationImage.hasOne(ApplicationImageComment, {
  foreignKey: "applicationImageId",
  onDelete: "CASCADE",
});
ApplicationImageComment.belongsTo(
  General,
  { foreignKey: "cardId" },
  ApplicationImage,
  {
    foreignKey: "applicationImageId",
  }
);

module.exports = {
  User,
  General,
  GeneralComment,
  FireTimeindicators,
  FireTimeindicatorsComment,
  WaterSupply,
  WaterSupplyComment,
  FireSituation,
  FireSituationComment,
  ActionsEvaluation,
  ActionsEvaluationComment,
  FeaturesOfFireExtinguishing,
  FeaturesOfFireExtinguishingComment,
  FireExtinguishPersonnel,
  FireExtinguishPersonnelComment,
  FireOthers,
  FireOthersComment,
  FireResults,
  FireResultsComment,
  ReportConclusion,
  ReportConclusionComment,
  ApplicationName,
  ApplicationNameComment,
  ApplicationImage,
  ApplicationImageComment,
};
