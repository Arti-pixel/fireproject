const { FireTimeindicators } = require("../models/models");

class FireTimeindicatorsController {
  async create(req, res) {
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
    } = req.body;

    const fireTimeindicator = await FireTimeindicators.create({
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
    });

    return res.json(fireTimeindicator);
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const fireTimeindicator = await FireTimeindicators.findOne({
      where: { cardId },
    });
    return res.json(fireTimeindicator);
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
    } = req.body;

    if (
      await FireTimeindicators.findOne({
        where: { cardId },
      })
    ) {
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
        },
        { where: { cardId } }
      );

      return res.json(fireTimeindicator);
    } else {
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
      });

      return res.json(fireTimeindicator);
    }
  }
}

module.exports = new FireTimeindicatorsController();
