const { FireResults } = require("../../models/models");
const { Op } = require("sequelize");

class FireResultsController {
  async create(req, res) {
    const {
      cardId,
      savedPeople = null,
      savedChildren = null,
      savedByFirefighter = null,
      savedByVolunteers = null,
      savedByPeople = null,
      savedByServicePersonnel = null,
      savedByRescuers = null,
      diedInAFire = null,
      traumatizedPeople = null,
      destroyedBuildings = null,
      animalsDied = null,
      amountOfDamageByFire = null,
      totalValueOfSalvagedProperty = null,
      fireExtinguishingAgentsConsumed = null,
      hasComments = false,
    } = req.body;

    const fireresult = await FireResults.create({
      cardId,
      savedPeople,
      savedChildren,
      savedByFirefighter,
      savedByVolunteers,
      savedByPeople,
      savedByServicePersonnel,
      savedByRescuers,
      diedInAFire,
      traumatizedPeople,
      destroyedBuildings,
      animalsDied,
      amountOfDamageByFire,
      totalValueOfSalvagedProperty,
      fireExtinguishingAgentsConsumed,
      hasComments,
    });
    // return res.json(fireTimeindicator);
    return;
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const fireresult = await FireResults.findOne({
      where: { cardId },
    });
    return res.json(fireresult);
  }

  async checkCommentsExistence(req, res) {
    return new Promise((resolve, reject) => {
      const { cardId } = req.params;
      FireResults.findOne({
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
      savedPeople,
      savedChildren,
      savedByFirefighter,
      savedByVolunteers,
      savedByPeople,
      savedByServicePersonnel,
      savedByRescuers,
      diedInAFire,
      traumatizedPeople,
      destroyedBuildings,
      animalsDied,
      amountOfDamageByFire,
      totalValueOfSalvagedProperty,
      fireExtinguishingAgentsConsumed,
      hasComments,
    } = req.body;
    {
      const fireresult = await FireResults.update(
        {
          savedPeople,
          savedChildren,
          savedByFirefighter,
          savedByVolunteers,
          savedByPeople,
          savedByServicePersonnel,
          savedByRescuers,
          diedInAFire,
          traumatizedPeople,
          destroyedBuildings,
          animalsDied,
          amountOfDamageByFire,
          totalValueOfSalvagedProperty,
          fireExtinguishingAgentsConsumed,
          hasComments,
        },
        { where: { cardId } }
      );

      return res.json(fireresult);
    }
  }
}

module.exports = new FireResultsController();
