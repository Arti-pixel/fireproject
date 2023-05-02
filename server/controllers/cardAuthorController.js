const { CardAuthor } = require("../models/models");
const ApiError = require("../error/ApiError");

class CardAuthorController {
  async create(req, res) {
    const { cardId, measuresTaken, positionAuthor, fullNameAuthor } = req.body;

    const cardAuthor = await CardAuthor.create({
      cardId,
      measuresTaken,
      positionAuthor,
      fullNameAuthor,
    });
    return res.json(cardAuthor);
  }
  async getOne(req, res) {
    const { cardId } = req.params;
    const cardAuthor = await CardAuthor.findOne({
      where: { cardId },
    });
    return res.json(cardAuthor);
  }
  async update(req, res) {
    const { cardId } = req.params;
    const { measuresTaken, positionAuthor, fullNameAuthor } = req.body;
    const cardAuthor = await CardAuthor.update(
      {
        measuresTaken,
        positionAuthor,
        fullNameAuthor,
      },
      { where: { cardId } }
    );
    return res.json(cardAuthor);
  }
}

module.exports = new CardAuthorController();
