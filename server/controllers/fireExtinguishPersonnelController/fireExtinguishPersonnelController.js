const { FireExtinguishPersonnel } = require("../../models/models");
const { Op } = require("sequelize");

class FireExtinguishPersonnelController {
  async create(req, res) {
    const {
      cardId,
      fireExtinguishPersonnel = null,
      fireExtinguishTech = null,
      fireExtinguishWithGasAndSmokeProtectionService = null,
      OnesquadOfFirefighters = null,
      TwosquadOfFirefighters = null,
      hasComments = false,
    } = req.body;

    const firePersonnel = await FireExtinguishPersonnel.create({
      cardId,
      fireExtinguishPersonnel,
      fireExtinguishTech,
      fireExtinguishWithGasAndSmokeProtectionService,
      OnesquadOfFirefighters,
      TwosquadOfFirefighters,
      hasComments,
    });
    // return res.json(fireTimeindicator);
    return;
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const firePersonnel = await FireExtinguishPersonnel.findOne({
      where: { cardId },
    });
    return res.json(firePersonnel);
  }

  async checkCommentsExistence(req, res) {
    return new Promise((resolve, reject) => {
      const { cardId } = req.params;
      FireExtinguishPersonnel.findOne({
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
      fireExtinguishPersonnel,
      fireExtinguishTech,
      fireExtinguishWithGasAndSmokeProtectionService,
      OnesquadOfFirefighters,
      TwosquadOfFirefighters,
      hasComments,
    } = req.body;
    {
      const firePersonnel = await FireExtinguishPersonnel.update(
        {
          fireExtinguishPersonnel,
          fireExtinguishTech,
          fireExtinguishWithGasAndSmokeProtectionService,
          OnesquadOfFirefighters,
          TwosquadOfFirefighters,
          hasComments,
        },
        { where: { cardId } }
      );

      return res.json(firePersonnel);
    }
  }
}

module.exports = new FireExtinguishPersonnelController();
