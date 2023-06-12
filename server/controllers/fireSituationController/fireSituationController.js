const { FireSituation } = require("../../models/models");
const { Op } = require("sequelize");

class FireSituationController {
  async create(req, res) {
    const { cardId, fireSituation = null, hasComments = false } = req.body;

    const situation = await FireSituation.create({
      cardId,
      fireSituation,
      hasComments,
    });
    // return res.json(fireTimeindicator);
    return;
  }

  async getCardInfo(req, res) {
    const { cardId } = req.params;
    const data = await FireSituation.findOne({
      where: { cardId },
    });
    return data;
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const situation = await FireSituation.findOne({
      where: { cardId },
    });
    return res.json(situation);
  }

  async checkCommentsExistence(req, res) {
    return new Promise((resolve, reject) => {
      const { cardId } = req.params;
      FireSituation.findOne({
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
    const { fireSituation, hasComments } = req.body;
    {
      const situation = await FireSituation.update(
        {
          fireSituation,
          hasComments,
        },
        { where: { cardId } }
      );

      return res.json(situation);
    }
  }
}

module.exports = new FireSituationController();
