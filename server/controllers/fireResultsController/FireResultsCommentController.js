const { FireResultsComment } = require("../../models/models");

class FireResultsCommentController {
  async create(req, res) {
    const {
      cardId,
      savedPeopleComment,
      savedByFirefighterComment,
      savedByVolunteersComment,
      savedByPeopleComment,
      savedByServicePersonnelComment,
      savedByRescuersComment,
      diedInAFireComment,
      traumatizedPeopleComment,
      destroyedBuildingsComment,
      animalsDiedComment,
      amountOfDamageByFireComment,
      totalValueOfSalvagedPropertyComment,
      fireExtinguishingAgentsConsumedComment,
    } = req.body;

    const fireresultComment = await FireResultsComment.create({
      cardId,
      savedPeopleComment,
      savedByFirefighterComment,
      savedByVolunteersComment,
      savedByPeopleComment,
      savedByServicePersonnelComment,
      savedByRescuersComment,
      diedInAFireComment,
      traumatizedPeopleComment,
      destroyedBuildingsComment,
      animalsDiedComment,
      amountOfDamageByFireComment,
      totalValueOfSalvagedPropertyComment,
      fireExtinguishingAgentsConsumedComment,
    });

    return res.json(fireresultComment);
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const fireresultComment = await FireResultsComment.findOne({
      where: { cardId },
    });
    return res.json(fireresultComment);
  }

  async update(req, res) {
    const { cardId } = req.params;
    const {
      savedPeopleComment,
      savedByFirefighterComment,
      savedByVolunteersComment,
      savedByPeopleComment,
      savedByServicePersonnelComment,
      savedByRescuersComment,
      diedInAFireComment,
      traumatizedPeopleComment,
      destroyedBuildingsComment,
      animalsDiedComment,
      amountOfDamageByFireComment,
      totalValueOfSalvagedPropertyComment,
      fireExtinguishingAgentsConsumedComment,
    } = req.body;

    if (
      await FireResultsComment.findOne({
        where: { cardId },
      })
    ) {
      const fireresultComment = await FireResultsComment.update(
        {
          savedPeopleComment,
          savedByFirefighterComment,
          savedByVolunteersComment,
          savedByPeopleComment,
          savedByServicePersonnelComment,
          savedByRescuersComment,
          diedInAFireComment,
          traumatizedPeopleComment,
          destroyedBuildingsComment,
          animalsDiedComment,
          amountOfDamageByFireComment,
          totalValueOfSalvagedPropertyComment,
          fireExtinguishingAgentsConsumedComment,
        },
        { where: { cardId } }
      );

      return res.json(fireresultComment);
    } else {
      const fireresultComment = await FireResultsComment.create({
        cardId,
        savedPeopleComment,
        savedByFirefighterComment,
        savedByVolunteersComment,
        savedByPeopleComment,
        savedByServicePersonnelComment,
        savedByRescuersComment,
        diedInAFireComment,
        traumatizedPeopleComment,
        destroyedBuildingsComment,
        animalsDiedComment,
        amountOfDamageByFireComment,
        totalValueOfSalvagedPropertyComment,
        fireExtinguishingAgentsConsumedComment,
      });

      return res.json(fireresultComment);
    }
  }
}

module.exports = new FireResultsCommentController();
