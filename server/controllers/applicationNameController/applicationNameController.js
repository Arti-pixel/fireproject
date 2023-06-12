const { ApplicationName } = require("../../models/models");
const { Op } = require("sequelize");

class ApplicationNameController {
  async create(req, res) {
    const { cardId, applicationName = null, hasComments = false } = req.body;

    const appName = await ApplicationName.create({
      cardId,
      applicationName,
      hasComments,
    });
    // return res.json(appName);
    return;
  }

  async getCardInfo(req, res) {
    const { cardId } = req.params;
    const data = await ApplicationName.findOne({
      where: { cardId },
    });
    return data;
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const appName = await ApplicationName.findOne({
      where: { cardId },
    });
    return res.json(appName);
  }

  async checkCommentsExistence(req, res) {
    return new Promise((resolve, reject) => {
      const { cardId } = req.params;
      ApplicationName.findOne({
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
    const { applicationName, hasComments } = req.body;
    {
      const appName = await ApplicationName.update(
        {
          applicationName,
          hasComments,
        },
        { where: { cardId } }
      );

      return res.json(appName);
    }
  }
}

module.exports = new ApplicationNameController();
