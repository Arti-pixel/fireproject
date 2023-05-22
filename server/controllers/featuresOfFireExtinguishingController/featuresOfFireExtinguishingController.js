const { FeaturesOfFireExtinguishing } = require("../../models/models");
const { Op } = require("sequelize");

class FeaturesOfFireExtinguishingController {
  async create(req, res) {
    const {
      cardId,
      featuresOfFireExtinguishing = null,
      creationOfOperationalHeadquarters = null,
      creationOfFireFightingAreas = null,
      circumstancesContributingToFireDevelopment = null,
      circumstancesComplicatingTheSituation = null,
      hasComments = false,
    } = req.body;

    const featuresOfExtinguishing = await FeaturesOfFireExtinguishing.create({
      cardId,
      featuresOfFireExtinguishing,
      creationOfOperationalHeadquarters,
      creationOfFireFightingAreas,
      circumstancesContributingToFireDevelopment,
      circumstancesComplicatingTheSituation,
      hasComments,
    });
    // return res.json(fireTimeindicator);
    return;
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const featuresOfExtinguishing = await FeaturesOfFireExtinguishing.findOne({
      where: { cardId },
    });
    return res.json(featuresOfExtinguishing);
  }

  async checkCommentsExistence(req, res) {
    return new Promise((resolve, reject) => {
      const { cardId } = req.params;
      FeaturesOfFireExtinguishing.findOne({
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
      featuresOfFireExtinguishing,
      creationOfOperationalHeadquarters,
      creationOfFireFightingAreas,
      circumstancesContributingToFireDevelopment,
      circumstancesComplicatingTheSituation,
      hasComments,
    } = req.body;
    {
      const featuresOfExtinguishing = await FeaturesOfFireExtinguishing.update(
        {
          featuresOfFireExtinguishing,
          creationOfOperationalHeadquarters,
          creationOfFireFightingAreas,
          circumstancesContributingToFireDevelopment,
          circumstancesComplicatingTheSituation,
          hasComments,
        },
        { where: { cardId } }
      );

      return res.json(featuresOfExtinguishing);
    }
  }
}

module.exports = new FeaturesOfFireExtinguishingController();
