const { FireOthersComment } = require("../../models/models");

class FireOthersCommentController {
  async create(req, res) {
    const {
      cardId,
      serviceInteractionComment,
      notArrivedServicesComment,
      fireEquipmentMalfunctionComment,
      fireCauseAndCulpritComment,
    } = req.body;

    const fireotherComment = await FireOthersComment.create({
      cardId,
      serviceInteractionComment,
      notArrivedServicesComment,
      fireEquipmentMalfunctionComment,
      fireCauseAndCulpritComment,
    });

    return res.json(fireotherComment);
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const fireotherComment = await FireOthersComment.findOne({
      where: { cardId },
    });
    return res.json(fireotherComment);
  }

  async update(req, res) {
    const { cardId } = req.params;
    const {
      serviceInteractionComment,
      notArrivedServicesComment,
      fireEquipmentMalfunctionComment,
      fireCauseAndCulpritComment,
    } = req.body;

    if (
      await FireOthersComment.findOne({
        where: { cardId },
      })
    ) {
      const fireotherComment = await FireOthersComment.update(
        {
          serviceInteractionComment,
          notArrivedServicesComment,
          fireEquipmentMalfunctionComment,
          fireCauseAndCulpritComment,
        },
        { where: { cardId } }
      );

      return res.json(fireotherComment);
    } else {
      const fireotherComment = await FireOthersComment.create({
        cardId,
        serviceInteractionComment,
        notArrivedServicesComment,
        fireEquipmentMalfunctionComment,
        fireCauseAndCulpritComment,
      });

      return res.json(fireotherComment);
    }
  }
}

module.exports = new FireOthersCommentController();
