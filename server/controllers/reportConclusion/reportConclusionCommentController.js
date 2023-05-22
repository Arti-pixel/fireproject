const { ReportConclusionComment } = require("../../models/models");

class ReportConclusionCommentController {
  async create(req, res) {
    const {
      cardId,
      violationsOfSafetyRegulationsComment,
      diedByViolationComment,
      traumatizedByViolationComment,
      conclusionAndProposalsComment,
      fullNameComment,
      reportDateComment,
    } = req.body;

    const reportConclusionComment = await ReportConclusionComment.create({
      cardId,
      violationsOfSafetyRegulationsComment,
      diedByViolationComment,
      traumatizedByViolationComment,
      conclusionAndProposalsComment,
      fullNameComment,
      reportDateComment,
    });

    return res.json(reportConclusionComment);
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const reportConclusionComment = await ReportConclusionComment.findOne({
      where: { cardId },
    });
    return res.json(reportConclusionComment);
  }

  async update(req, res) {
    const { cardId } = req.params;
    const {
      violationsOfSafetyRegulationsComment,
      diedByViolationComment,
      traumatizedByViolationComment,
      conclusionAndProposalsComment,
      fullNameComment,
      reportDateComment,
    } = req.body;

    if (
      await ReportConclusionComment.findOne({
        where: { cardId },
      })
    ) {
      const reportConclusionComment = await ReportConclusionComment.update(
        {
          violationsOfSafetyRegulationsComment,
          diedByViolationComment,
          traumatizedByViolationComment,
          conclusionAndProposalsComment,
          fullNameComment,
          reportDateComment,
        },
        { where: { cardId } }
      );

      return res.json(reportConclusionComment);
    } else {
      const reportConclusionComment = await ReportConclusionComment.create({
        cardId,
        violationsOfSafetyRegulationsComment,
        diedByViolationComment,
        traumatizedByViolationComment,
        conclusionAndProposalsComment,
        fullNameComment,
        reportDateComment,
      });

      return res.json(reportConclusionComment);
    }
  }
}

module.exports = new ReportConclusionCommentController();
