const { ApplicationImage } = require("../../models/models");
const ApiError = require("../../error/ApiError");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");
const { Op } = require("sequelize");

class ApplicationImageController {
  async create(req, res, next) {
    try {
      const { cardId } = req.params;
      // const { imageSignature = null, hasComments = false } = req.body;
      // const { applicationImage = null } = req.files;

      const fireImage = await ApplicationImage.create({
        cardId,
        imageSignature: "",
        applicationImage: null,
        hasComments: false,
      });

      return res.json(fireImage);
    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const fireImage = await ApplicationImage.findAll({
      where: { cardId },
    });
    return res.json(fireImage);
  }

  async checkCommentsExistence(req, res) {
    return new Promise((resolve, reject) => {
      const { cardId } = req.params;
      ApplicationImage.findAll({
        where: { [Op.and]: [{ cardId }, { hasComments: true }] },
      })
        .then((general) => {
          const commentsExist = general.length !== 0;
          resolve(commentsExist);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async delete(req, res, next) {
    try {
      const { cardId } = req.params;
      const { applicationImageId } = req.query;

      let findPreviousImage = await ApplicationImage.findOne({
        where: { [Op.and]: [{ cardId }, { applicationImageId }] },
      });

      if (findPreviousImage.applicationImage) {
        fs.unlinkSync(
          path.resolve(
            __dirname,
            "../..",
            "static",
            findPreviousImage.applicationImage
          )
        );
      }

      const fireImage = await ApplicationImage.destroy({
        where: { [Op.and]: [{ cardId }, { applicationImageId }] },
        cascade: true,
      });
      return res.json(fireImage);
    } catch (e) {
      return next(Error(e.message));
    }
  }

  async update(req, res, next) {
    try {
      const { cardId } = req.params;
      const { applicationImageId, imageSignature, hasComments } = req.body;

      let findPreviousImage = await ApplicationImage.findOne({
        where: { [Op.and]: [{ cardId }, { applicationImageId }] },
      });

      let fireImage;

      if (req.files) {
        const { applicationImage } = req.files;

        if (findPreviousImage.applicationImage) {
          fs.unlinkSync(
            path.resolve(
              __dirname,
              "../..",
              "static",
              findPreviousImage.applicationImage
            )
          );
        }

        let fileName = uuid.v4() + ".jpg";
        applicationImage.mv(
          path.resolve(__dirname, "../..", "static", fileName)
        );

        fireImage = await ApplicationImage.update(
          {
            applicationImage: fileName,
            imageSignature,
            hasComments,
          },
          { where: { [Op.and]: [{ cardId }, { applicationImageId }] } }
        );
      }

      fireImage = await ApplicationImage.update(
        {
          imageSignature,
          hasComments,
        },
        { where: { [Op.and]: [{ cardId }, { applicationImageId }] } }
      );

      return res.json(fireImage);
    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ApplicationImageController();
