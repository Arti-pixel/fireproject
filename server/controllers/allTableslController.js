const generalController = require("../controllers/generalController/generalController");
const fireTimeindicatorsController = require("./fireTimeindicatorsController/fireTimeindicatorsController");
const waterSupplyController = require("./waterSupplyController/waterSupplyController");
const fireSituationController = require("./fireSituationController/fireSituationController");
const actionsEvaluationController = require("./actionsEvaluationController/actionsEvaluationController");
const featuresOfFireExtinguishingController = require("./featuresOfFireExtinguishingController/featuresOfFireExtinguishingController");
const fireExtinguishPersonnelController = require("./fireExtinguishPersonnelController/fireExtinguishPersonnelController");
const fireOthersController = require("./fireOthersController/fireOthersController");
const fireResultsController = require("./fireResultsController/fireResultsController");
const reportConclusionController = require("./reportConclusion/reportConclusionController");
const applicationNameController = require("./applicationNameController/applicationNameController");
const applicationImageController = require("./applicationImageController/applicationImageController");

const controllerArray = [
  generalController,
  applicationImageController,
  fireTimeindicatorsController,
  waterSupplyController,
  fireSituationController,
  actionsEvaluationController,
  featuresOfFireExtinguishingController,
  fireExtinguishPersonnelController,
  fireOthersController,
  fireResultsController,
  reportConclusionController,
  applicationNameController,
];

class AllTableslController {
  async create(req, res) {
    const general = await generalController.create(req, res);

    const { cardId } = general;

    for await (const item of controllerArray.slice(2)) {
      const updatedReq = { ...req, body: { ...req.body, cardId } };
      await item.create(updatedReq, res);
    }

    return res.json(cardId);
  }

  async checkCommentsExistence(req, res) {
    let commentsExists = false;
    const promises = [];

    for (const item of controllerArray) {
      const promise = item.checkCommentsExistence(req, res);
      promises.push(promise);
    }

    const results = await Promise.all(promises);

    for (const result of results) {
      commentsExists = commentsExists || result;
    }

    return res.json(commentsExists);
  }
}

module.exports = new AllTableslController();
