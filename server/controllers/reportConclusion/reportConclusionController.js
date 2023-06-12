const { ReportConclusion } = require("../../models/models");
const { Op } = require("sequelize");

class ReportConclusionController {
  async create(req, res) {
    const {
      cardId,
      violationsOfSafetyRegulations = null,
      diedByViolation = null,
      traumatizedByViolation = null,
      conclusionAndProposals = null,
      fullName = null,
      reportDate = null,
      hasComments = false,
    } = req.body;

    const reportConclusion = await ReportConclusion.create({
      cardId,
      violationsOfSafetyRegulations,
      diedByViolation,
      traumatizedByViolation,
      conclusionAndProposals,
      fullName,
      reportDate,
      hasComments,
    });
    // return res.json(fireTimeindicator);
    return;
  }

  async getCardInfo(req, res) {
    const { cardId } = req.params;
    const data = await ReportConclusion.findOne({
      where: { cardId },
    });
    return data;
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const reportConclusion = await ReportConclusion.findOne({
      where: { cardId },
    });
    return res.json(reportConclusion);
  }

  async checkCommentsExistence(req, res) {
    return new Promise((resolve, reject) => {
      const { cardId } = req.params;
      ReportConclusion.findOne({
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
      violationsOfSafetyRegulations,
      diedByViolation,
      traumatizedByViolation,
      conclusionAndProposals,
      fullName,
      reportDate,
      hasComments,
    } = req.body;
    {
      const reportConclusion = await ReportConclusion.update(
        {
          violationsOfSafetyRegulations,
          diedByViolation,
          traumatizedByViolation,
          conclusionAndProposals,
          fullName,
          reportDate,
          hasComments,
        },
        { where: { cardId } }
      );

      return res.json(reportConclusion);
    }
  }
}

module.exports = new ReportConclusionController();
