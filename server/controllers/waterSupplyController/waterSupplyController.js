const { WaterSupply } = require("../../models/models");
const { Op } = require("sequelize");

class WaterSupplyController {
  async create(req, res) {
    const {
      cardId,
      waterSupplyСharacteristic = null,
      waterSupplyFromTank = null,
      waterSupplyWithWaterSource = null,
      waterDelivery = null,
      waterSupplyToPumping = null,
      hasComments = false,
    } = req.body;

    const waterSupply = await WaterSupply.create({
      cardId,
      waterSupplyСharacteristic,
      waterSupplyFromTank,
      waterSupplyWithWaterSource,
      waterDelivery,
      waterSupplyToPumping,
      hasComments,
    });
    // return res.json(fireTimeindicator);
    return;
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const waterSupply = await WaterSupply.findOne({
      where: { cardId },
    });
    return res.json(waterSupply);
  }

  async checkCommentsExistence(req, res) {
    return new Promise((resolve, reject) => {
      const { cardId } = req.params;
      WaterSupply.findOne({
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
      waterSupplyСharacteristic,
      waterSupplyFromTank,
      waterSupplyWithWaterSource,
      waterDelivery,
      waterSupplyToPumping,
      hasComments,
    } = req.body;
    {
      const waterSupply = await WaterSupply.update(
        {
          waterSupplyСharacteristic,
          waterSupplyFromTank,
          waterSupplyWithWaterSource,
          waterDelivery,
          waterSupplyToPumping,
          hasComments,
        },
        { where: { cardId } }
      );

      return res.json(waterSupply);
    }
  }
}

module.exports = new WaterSupplyController();
