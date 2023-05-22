const { GeneralComment } = require("../../models/models");

class GeneralCommentController {
  async create(req, res) {
    const {
      cardId,
      callNumberComment,
      shiftComment,
      callDateComment,
      settlementComment,
      addressComment,
      objectNameComment,
      objectCharacteristicComment,
      objectDetectionComment,
    } = req.body;

    const generalComment = await GeneralComment.create({
      cardId,
      callNumberComment,
      shiftComment,
      callDateComment,
      settlementComment,
      addressComment,
      objectNameComment,
      objectCharacteristicComment,
      objectDetectionComment,
    });

    return res.json(generalComment);
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const generalComment = await GeneralComment.findOne({
      where: { cardId },
    });
    return res.json(generalComment);
  }

  async update(req, res) {
    const { cardId } = req.params;
    const {
      callNumberComment,
      shiftComment,
      callDateComment,
      settlementComment,
      addressComment,
      objectNameComment,
      objectCharacteristicComment,
      objectDetectionComment,
    } = req.body;

    if (
      await GeneralComment.findOne({
        where: { cardId },
      })
    ) {
      const generalComment = await GeneralComment.update(
        {
          callNumberComment,
          shiftComment,
          callDateComment,
          settlementComment,
          addressComment,
          objectNameComment,
          objectCharacteristicComment,
          objectDetectionComment,
        },
        { where: { cardId } }
      );

      return res.json(generalComment);
    } else {
      const generalComment = await GeneralComment.create({
        cardId,
        callNumberComment,
        shiftComment,
        callDateComment,
        settlementComment,
        addressComment,
        objectNameComment,
        objectCharacteristicComment,
        objectDetectionComment,
      });

      return res.json(generalComment);
    }
  }
}

module.exports = new GeneralCommentController();
