const { FireTimeindicators } = require("../../models/models");
const { Op } = require("sequelize");

class FireTimeindicatorsController {
  async create(req, res) {
    const {
      cardId,
      fireOccurrenceTime = null,
      fireOccurrenceSq = null,
      fireDetectionTime = null,
      fireDetectionSq = null,
      fireMessageTime = null,
      fireMessageSq = null,
      departureTime = null,
      fireArrivalTime = null,
      fireArrivalSq = null,
      firstBarrelTime = null,
      firstBarrelSq = null,
      additionalForcesTime = null,
      additionalForcesSq = null,
      localizationTime = null,
      localizationSq = null,
      openFireEliminationTime = null,
      openFireEliminationSq = null,
      fireConsequencesEliminationTime = null,
      firestationReturnTime = null,
      hasComments = false,
    } = req.body;

    const fireTimeindicator = await FireTimeindicators.create({
      cardId,
      fireOccurrenceTime,
      fireOccurrenceSq,
      fireDetectionTime,
      fireDetectionSq,
      fireMessageTime,
      fireMessageSq,
      departureTime,
      fireArrivalTime,
      fireArrivalSq,
      firstBarrelTime,
      firstBarrelSq,
      additionalForcesTime,
      additionalForcesSq,
      localizationTime,
      localizationSq,
      openFireEliminationTime,
      openFireEliminationSq,
      fireConsequencesEliminationTime,
      firestationReturnTime,
      hasComments,
    });
    // return res.json(fireTimeindicator);
    return;
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const fireTimeindicator = await FireTimeindicators.findOne({
      where: { cardId },
    });
    return res.json(fireTimeindicator);
  }

  async checkCommentsExistence(req, res) {
    return new Promise((resolve, reject) => {
      const { cardId } = req.params;
      FireTimeindicators.findOne({
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
      fireOccurrenceTime,
      fireOccurrenceSq,
      fireDetectionTime,
      fireDetectionSq,
      fireMessageTime,
      fireMessageSq,
      departureTime,
      fireArrivalTime,
      fireArrivalSq,
      firstBarrelTime,
      firstBarrelSq,
      additionalForcesTime,
      additionalForcesSq,
      localizationTime,
      localizationSq,
      openFireEliminationTime,
      openFireEliminationSq,
      fireConsequencesEliminationTime,
      firestationReturnTime,
      hasComments,
    } = req.body;
    {
      const fireTimeindicator = await FireTimeindicators.update(
        {
          fireOccurrenceTime,
          fireOccurrenceSq,
          fireDetectionTime,
          fireDetectionSq,
          fireMessageTime,
          fireMessageSq,
          departureTime,
          fireArrivalTime,
          fireArrivalSq,
          firstBarrelTime,
          firstBarrelSq,
          additionalForcesTime,
          additionalForcesSq,
          localizationTime,
          localizationSq,
          openFireEliminationTime,
          openFireEliminationSq,
          fireConsequencesEliminationTime,
          firestationReturnTime,
          hasComments,
        },
        { where: { cardId } }
      );

      return res.json(fireTimeindicator);
    }
  }
}

module.exports = new FireTimeindicatorsController();
