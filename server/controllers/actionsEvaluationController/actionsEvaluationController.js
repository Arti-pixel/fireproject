const { ActionsEvaluation } = require("../../models/models");
const { Op } = require("sequelize");

class ActionsEvaluationController {
  async create(req, res) {
    const {
      cardId,
      firstFireExtinguishingCompany = null,
      secondFireExtinguishingCompany = null,
      thirdAndNextFireExtinguishingCompanies = null,
      chiefsOfTheCombatAreas = null,
      fireDepartments = null,
      hasComments = false,
    } = req.body;

    const actionEvaluation = await ActionsEvaluation.create({
      cardId,
      firstFireExtinguishingCompany,
      secondFireExtinguishingCompany,
      thirdAndNextFireExtinguishingCompanies,
      chiefsOfTheCombatAreas,
      fireDepartments,
      hasComments,
    });
    // return res.json(fireTimeindicator);
    return;
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const actionEvaluation = await ActionsEvaluation.findOne({
      where: { cardId },
    });
    return res.json(actionEvaluation);
  }

  async checkCommentsExistence(req, res) {
    return new Promise((resolve, reject) => {
      const { cardId } = req.params;
      ActionsEvaluation.findOne({
        where: { [Op.and]: [{ cardId }, { hasComments: true }] },
      })
        .then((general) => {
          const commentsExist = Boolean(general);
          resolve(commentsExist);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async update(req, res) {
    const { cardId } = req.params;
    const {
      firstFireExtinguishingCompany,
      secondFireExtinguishingCompany,
      thirdAndNextFireExtinguishingCompanies,
      chiefsOfTheCombatAreas,
      fireDepartments,
      hasComments = false,
    } = req.body;
    {
      const actionEvaluation = await ActionsEvaluation.update(
        {
          firstFireExtinguishingCompany,
          secondFireExtinguishingCompany,
          thirdAndNextFireExtinguishingCompanies,
          chiefsOfTheCombatAreas,
          fireDepartments,
          hasComments,
        },
        { where: { cardId } }
      );

      return res.json(actionEvaluation);
    }
  }
}

module.exports = new ActionsEvaluationController();
