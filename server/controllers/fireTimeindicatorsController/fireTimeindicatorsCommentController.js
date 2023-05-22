const { FireTimeindicatorsComment } = require("../../models/models");

class FireTimeindicatorsCommentController {
  async create(req, res) {
    const {
      cardId,
      fireOccurrenceComment,
      fireDetectionComment,
      fireMessageComment,
      departureTimeComment,
      fireArrivalComment,
      firstBarrelComment,
      additionalForcesComment,
      localizationComment,
      openFireEliminationComment,
      fireConsequencesEliminationComment,
      firestationReturnComment,
    } = req.body;

    const fireTimeindicatorsComment = await FireTimeindicatorsComment.create({
      cardId,
      fireOccurrenceComment,
      fireDetectionComment,
      fireMessageComment,
      departureTimeComment,
      fireArrivalComment,
      firstBarrelComment,
      additionalForcesComment,
      localizationComment,
      openFireEliminationComment,
      fireConsequencesEliminationComment,
      firestationReturnComment,
    });

    return res.json(fireTimeindicatorsComment);
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const fireTimeindicatorsComment = await FireTimeindicatorsComment.findOne({
      where: { cardId },
    });
    return res.json(fireTimeindicatorsComment);
  }

  async update(req, res) {
    const { cardId } = req.params;
    const {
      fireOccurrenceComment,
      fireDetectionComment,
      fireMessageComment,
      departureTimeComment,
      fireArrivalComment,
      firstBarrelComment,
      additionalForcesComment,
      localizationComment,
      openFireEliminationComment,
      fireConsequencesEliminationComment,
      firestationReturnComment,
    } = req.body;

    if (
      await FireTimeindicatorsComment.findOne({
        where: { cardId },
      })
    ) {
      const fireTimeindicatorsComment = await FireTimeindicatorsComment.update(
        {
          fireOccurrenceComment,
          fireDetectionComment,
          fireMessageComment,
          departureTimeComment,
          fireArrivalComment,
          firstBarrelComment,
          additionalForcesComment,
          localizationComment,
          openFireEliminationComment,
          fireConsequencesEliminationComment,
          firestationReturnComment,
        },
        { where: { cardId } }
      );

      return res.json(fireTimeindicatorsComment);
    } else {
      const fireTimeindicatorsComment = await FireTimeindicatorsComment.create({
        cardId,
        fireOccurrenceComment,
        fireDetectionComment,
        fireMessageComment,
        departureTimeComment,
        fireArrivalComment,
        firstBarrelComment,
        additionalForcesComment,
        localizationComment,
        openFireEliminationComment,
        fireConsequencesEliminationComment,
        firestationReturnComment,
      });

      return res.json(fireTimeindicatorsComment);
    }
  }
}

module.exports = new FireTimeindicatorsCommentController();
