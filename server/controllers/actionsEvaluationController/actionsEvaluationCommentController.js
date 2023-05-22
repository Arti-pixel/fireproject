const { ActionsEvaluationComment } = require("../../models/models");

class ActionsEvaluationCommentController {
  async create(req, res) {
    const {
      cardId,
      firstFireExtinguishingCompanyComment,
      secondFireExtinguishingCompanyComment,
      thirdAndNextFireExtinguishingCompaniesComment,
      chiefsOfTheCombatAreasComment,
      fireDepartmentsComment,
    } = req.body;

    const actionEvaluationComment = await ActionsEvaluationComment.create({
      cardId,
      firstFireExtinguishingCompanyComment,
      secondFireExtinguishingCompanyComment,
      thirdAndNextFireExtinguishingCompaniesComment,
      chiefsOfTheCombatAreasComment,
      fireDepartmentsComment,
    });

    return res.json(actionEvaluationComment);
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const actionEvaluationComment = await ActionsEvaluationComment.findOne({
      where: { cardId },
    });
    return res.json(actionEvaluationComment);
  }

  async update(req, res) {
    const { cardId } = req.params;
    const {
      firstFireExtinguishingCompanyComment,
      secondFireExtinguishingCompanyComment,
      thirdAndNextFireExtinguishingCompaniesComment,
      chiefsOfTheCombatAreasComment,
      fireDepartmentsComment,
    } = req.body;

    if (
      await ActionsEvaluationComment.findOne({
        where: { cardId },
      })
    ) {
      const actionEvaluationComment = await ActionsEvaluationComment.update(
        {
          firstFireExtinguishingCompanyComment,
          secondFireExtinguishingCompanyComment,
          thirdAndNextFireExtinguishingCompaniesComment,
          chiefsOfTheCombatAreasComment,
          fireDepartmentsComment,
        },
        { where: { cardId } }
      );

      return res.json(actionEvaluationComment);
    } else {
      const actionEvaluationComment = await ActionsEvaluationComment.create({
        cardId,
        firstFireExtinguishingCompanyComment,
        secondFireExtinguishingCompanyComment,
        thirdAndNextFireExtinguishingCompaniesComment,
        chiefsOfTheCombatAreasComment,
        fireDepartmentsComment,
      });

      return res.json(actionEvaluationComment);
    }
  }
}

module.exports = new ActionsEvaluationCommentController();
