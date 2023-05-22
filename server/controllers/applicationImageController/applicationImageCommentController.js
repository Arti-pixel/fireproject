const { ApplicationImageComment } = require("../../models/models");
const { Op } = require("sequelize");

class ApplicationImageCommentCommentController {
  async create(req, res) {
    const {
      cardId,
      applicationImageId,
      imageSignatureComment,
      applicationImageComment,
    } = req.body;

    const fireImageComment = await ApplicationImageComment.create({
      cardId,
      applicationImageId,
      imageSignatureComment: "",
      applicationImageComment: "",
    });

    return res.json(fireImageComment);
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const fireImageComment = await ApplicationImageComment.findAll({
      where: { cardId },
    });
    return res.json(fireImageComment);
  }

  async update(req, res) {
    const { cardId } = req.params;
    const {
      applicationImageId,
      imageSignatureComment,
      applicationImageComment,
    } = req.body;

    if (
      await ApplicationImageComment.findOne({
        where: { [Op.and]: [{ cardId }, { applicationImageId }] },
      })
    ) {
      const fireImageComment = await ApplicationImageComment.update(
        {
          imageSignatureComment,
          applicationImageComment,
        },
        { where: { [Op.and]: [{ cardId }, { applicationImageId }] } }
      );

      return res.json(fireImageComment);
    } else {
      const fireImageComment = await ApplicationImageComment.create({
        cardId,
        applicationImageId,
        imageSignatureComment,
        applicationImageComment,
      });

      return res.json(fireImageComment);
    }
  }
}

module.exports = new ApplicationImageCommentCommentController();
