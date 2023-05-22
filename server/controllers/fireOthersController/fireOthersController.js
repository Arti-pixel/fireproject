const { FireOthers } = require("../../models/models");
const { Op } = require("sequelize");

class FireOthersController {
  async create(req, res) {
    const {
      cardId,
      serviceInteraction = null,
      notArrivedServices = null,
      fireEquipmentMalfunction = null,
      fireCauseAndCulprit = null,
      hasComments = false,
    } = req.body;

    const fireother = await FireOthers.create({
      cardId,
      serviceInteraction,
      notArrivedServices,
      fireEquipmentMalfunction,
      fireCauseAndCulprit,
      hasComments,
    });
    // return res.json(fireTimeindicator);
    return;
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const fireother = await FireOthers.findOne({
      where: { cardId },
    });
    return res.json(fireother);
  }

  async checkCommentsExistence(req, res) {
    return new Promise((resolve, reject) => {
      const { cardId } = req.params;
      FireOthers.findOne({
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
      serviceInteraction,
      notArrivedServices,
      fireEquipmentMalfunction,
      fireCauseAndCulprit,
      hasComments,
    } = req.body;
    {
      const fireother = await FireOthers.update(
        {
          serviceInteraction,
          notArrivedServices,
          fireEquipmentMalfunction,
          fireCauseAndCulprit,
          hasComments,
        },
        { where: { cardId } }
      );

      return res.json(fireother);
    }
  }
}

module.exports = new FireOthersController();
