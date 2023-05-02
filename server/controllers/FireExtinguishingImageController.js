const { FireExtinguishingImage } = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");

//TODO рассмотреть возможность удаления записей

class FireExtinguishingImageController {
  async create(req, res, next) {
    try {
      const { cardId } = req.params;
      const { measuresTaken, positionAuthor, fullNameAuthor } = req.body;
      const { image } = req.files;
      let fileName = uuid.v4() + ".jpg";
      image.mv(path.resolve(__dirname, "..", "static", fileName));

      const fireImage = await FireExtinguishingImage.create({
        cardId,
        image: fileName,
        measuresTaken,
        positionAuthor,
        fullNameAuthor,
      });

      return res.json(fireImage);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const fireImage = await FireExtinguishingImage.findOne({
      where: { cardId },
    });
    return res.json(fireImage);
  }

  async update(req, res) {
    try {
      const { cardId } = req.params;
      const { image } = req.files;
      const { measuresTaken, positionAuthor, fullNameAuthor } = req.body;

      let findPreviousImage = await FireExtinguishingImage.findOne({
        where: { cardId },
      });
      fs.unlinkSync(
        path.resolve(__dirname, "..", "static", findPreviousImage.image)
      );

      let fileName = uuid.v4() + ".jpg";
      image.mv(path.resolve(__dirname, "..", "static", fileName));

      const fireImage = await FireExtinguishingImage.update(
        {
          image: fileName,
          measuresTaken,
          positionAuthor,
          fullNameAuthor,
        },
        { where: { cardId } }
      );
      return res.json(fireImage);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new FireExtinguishingImageController();
