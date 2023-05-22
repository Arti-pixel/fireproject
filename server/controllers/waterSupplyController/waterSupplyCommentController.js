const { WaterSupplyComment } = require("../../models/models");

class WaterSupplyCommentController {
  async create(req, res) {
    const {
      cardId,
      waterSupplyСharacteristicComment,
      waterSupplyFromTankComment,
      waterSupplyWithWaterSourceComment,
      waterDeliveryComment,
      waterSupplyToPumpingComment,
    } = req.body;

    const waterSupplyComment = await WaterSupplyComment.create({
      cardId,
      waterSupplyСharacteristicComment,
      waterSupplyFromTankComment,
      waterSupplyWithWaterSourceComment,
      waterDeliveryComment,
      waterSupplyToPumpingComment,
    });

    return res.json(waterSupplyComment);
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const waterSupplyComment = await WaterSupplyComment.findOne({
      where: { cardId },
    });
    return res.json(waterSupplyComment);
  }

  async update(req, res) {
    const { cardId } = req.params;
    const {
      waterSupplyСharacteristicComment,
      waterSupplyFromTankComment,
      waterSupplyWithWaterSourceComment,
      waterDeliveryComment,
      waterSupplyToPumpingComment,
    } = req.body;

    if (
      await WaterSupplyComment.findOne({
        where: { cardId },
      })
    ) {
      const waterSupplyComment = await WaterSupplyComment.update(
        {
          waterSupplyСharacteristicComment,
          waterSupplyFromTankComment,
          waterSupplyWithWaterSourceComment,
          waterDeliveryComment,
          waterSupplyToPumpingComment,
        },
        { where: { cardId } }
      );

      return res.json(waterSupplyComment);
    } else {
      const waterSupplyComment = await WaterSupplyComment.create({
        cardId,
        waterSupplyСharacteristicComment,
        waterSupplyFromTankComment,
        waterSupplyWithWaterSourceComment,
        waterDeliveryComment,
        waterSupplyToPumpingComment,
      });

      return res.json(waterSupplyComment);
    }
  }
}

module.exports = new WaterSupplyCommentController();
