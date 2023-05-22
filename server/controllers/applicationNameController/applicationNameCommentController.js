const { ApplicationNameComment } = require("../../models/models");

class ApplicationNameCommentController {
  async create(req, res) {
    const { cardId, applicationNameComment } = req.body;

    const appNameComment = await ApplicationNameComment.create({
      cardId,
      applicationNameComment,
    });

    return res.json(appNameComment);
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const appNameComment = await ApplicationNameComment.findOne({
      where: { cardId },
    });
    return res.json(appNameComment);
  }

  async update(req, res) {
    const { cardId } = req.params;
    const { applicationNameComment } = req.body;

    if (
      await ApplicationNameComment.findOne({
        where: { cardId },
      })
    ) {
      const appNameComment = await ApplicationNameComment.update(
        {
          applicationNameComment,
        },
        { where: { cardId } }
      );

      return res.json(appNameComment);
    } else {
      const appNameComment = await ApplicationNameComment.create({
        cardId,
        applicationNameComment,
      });

      return res.json(appNameComment);
    }
  }
}

module.exports = new ApplicationNameCommentController();
