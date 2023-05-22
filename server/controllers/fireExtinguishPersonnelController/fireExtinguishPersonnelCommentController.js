const { FireExtinguishPersonnelComment } = require("../../models/models");

class FireExtinguishPersonnelCommentController {
  async create(req, res) {
    const {
      cardId,
      fireExtinguishPersonnelComment,
      fireExtinguishTechComment,
      fireExtinguishWithGasAndSmokeProtectionServiceComment,
      OnesquadOfFirefightersComment,
      TwosquadOfFirefightersComment,
    } = req.body;

    const firePersonnelComment = await FireExtinguishPersonnelComment.create({
      cardId,
      fireExtinguishPersonnelComment,
      fireExtinguishTechComment,
      fireExtinguishWithGasAndSmokeProtectionServiceComment,
      OnesquadOfFirefightersComment,
      TwosquadOfFirefightersComment,
    });

    return res.json(firePersonnelComment);
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const firePersonnelComment = await FireExtinguishPersonnelComment.findOne({
      where: { cardId },
    });
    return res.json(firePersonnelComment);
  }

  async update(req, res) {
    const { cardId } = req.params;
    const {
      fireExtinguishPersonnelComment,
      fireExtinguishTechComment,
      fireExtinguishWithGasAndSmokeProtectionServiceComment,
      OnesquadOfFirefightersComment,
      TwosquadOfFirefightersComment,
    } = req.body;

    if (
      await FireExtinguishPersonnelComment.findOne({
        where: { cardId },
      })
    ) {
      const firePersonnelComment = await FireExtinguishPersonnelComment.update(
        {
          fireExtinguishPersonnelComment,
          fireExtinguishTechComment,
          fireExtinguishWithGasAndSmokeProtectionServiceComment,
          OnesquadOfFirefightersComment,
          TwosquadOfFirefightersComment,
        },
        { where: { cardId } }
      );

      return res.json(firePersonnelComment);
    } else {
      const firePersonnelComment = await FireExtinguishPersonnelComment.create({
        cardId,
        fireExtinguishPersonnelComment,
        fireExtinguishTechComment,
        fireExtinguishWithGasAndSmokeProtectionServiceComment,
        OnesquadOfFirefightersComment,
        TwosquadOfFirefightersComment,
      });

      return res.json(firePersonnelComment);
    }
  }
}

module.exports = new FireExtinguishPersonnelCommentController();
