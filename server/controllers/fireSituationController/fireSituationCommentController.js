const { FireSituationComment } = require("../../models/models");

class FireSituationCommentController {
  async create(req, res) {
    const { cardId, fireSituationComment } = req.body;

    const situationComment = await FireSituationComment.create({
      cardId,
      fireSituationComment,
    });

    return res.json(situationComment);
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const situationComment = await FireSituationComment.findOne({
      where: { cardId },
    });
    return res.json(situationComment);
  }

  async update(req, res) {
    const { cardId } = req.params;
    const { fireSituationComment } = req.body;

    if (
      await FireSituationComment.findOne({
        where: { cardId },
      })
    ) {
      const situationComment = await FireSituationComment.update(
        {
          fireSituationComment,
        },
        { where: { cardId } }
      );

      return res.json(situationComment);
    } else {
      const situationComment = await FireSituationComment.create({
        cardId,
        fireSituationComment,
      });

      return res.json(situationComment);
    }
  }
}

module.exports = new FireSituationCommentController();
