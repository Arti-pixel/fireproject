const { General } = require("../../models/models");
const { ApplicationImage } = require("../../models/models");
const fs = require("fs");
const path = require("path");
const ApiError = require("../../error/ApiError");
const { Op } = require("sequelize");

class GeneralController {
  // async create(req, res) {
  //   let {
  //     userId,
  //     callNumber = "-",
  //     shift,
  //     callDate,
  //     objectName,
  //     settlement,
  //     address,
  //     objectCharacteristic = null,
  //     objectDetection = null,
  //     currentState = "userEdit",
  //     hasComments = false,
  //   } = req.body;

  //   const general = await General.create({
  //     userId,
  //     callNumber,
  //     shift,
  //     callDate,
  //     objectName,
  //     settlement,
  //     address,
  //     objectCharacteristic,
  //     objectDetection,
  //     currentState,
  //     hasComments,
  //   });

  //   return res.json(general.dataValues.cardId);
  // }

  async create(req, res) {
    return new Promise((resolve, reject) => {
      let {
        userId,
        callNumber = "-",
        shift,
        callDate,
        objectName,
        settlement,
        address,
        objectCharacteristic = null,
        objectDetection = null,
        currentState = "userEdit",
        hasComments = false,
      } = req.body;

      General.create({
        userId,
        callNumber,
        shift,
        callDate,
        objectName,
        settlement,
        address,
        objectCharacteristic,
        objectDetection,
        currentState,
        hasComments,
      })
        .then((general) => {
          resolve(general.dataValues);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getAll(req, res) {
    let { filterPropeties, limit, page } = req.query;
    const { startCallDate, endCallDate, callNumber, settlement, currentState } =
      filterPropeties;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;

    let generals;

    if (
      callNumber === "null" &&
      settlement === "null" &&
      currentState === "null"
    ) {
      generals = await General.findAndCountAll({
        limit,
        offset,
        where: {
          [Op.and]: [
            {
              callDate: {
                [Op.and]: [
                  { [Op.gt]: startCallDate },
                  { [Op.lt]: endCallDate },
                ],
              },
            },
          ],
        },
      });
    } else if (callNumber && settlement === "null" && currentState === "null") {
      generals = await General.findAndCountAll({
        limit,
        offset,
        where: {
          [Op.and]: [
            {
              callDate: {
                [Op.and]: [
                  { [Op.gt]: startCallDate },
                  { [Op.lt]: endCallDate },
                ],
              },
            },
            { callNumber },
          ],
        },
      });
    } else if (callNumber === "null" && settlement && currentState === "null") {
      generals = await General.findAndCountAll({
        limit,
        offset,
        where: {
          [Op.and]: [
            {
              callDate: {
                [Op.and]: [
                  { [Op.gt]: startCallDate },
                  { [Op.lt]: endCallDate },
                ],
              },
            },
            { settlement },
          ],
        },
      });
    } else if (callNumber && settlement && currentState === "null") {
      generals = await General.findAndCountAll({
        limit,
        offset,
        where: {
          [Op.and]: [
            {
              callDate: {
                [Op.and]: [
                  { [Op.gt]: startCallDate },
                  { [Op.lt]: endCallDate },
                ],
              },
            },
            { callNumber },
            { settlement },
          ],
        },
      });
    } else if (callNumber === "null" && settlement === "null" && currentState) {
      generals = await General.findAndCountAll({
        limit,
        offset,
        where: {
          [Op.and]: [
            {
              callDate: {
                [Op.and]: [
                  { [Op.gt]: startCallDate },
                  { [Op.lt]: endCallDate },
                ],
              },
            },
            { currentState },
          ],
        },
      });
    } else if (callNumber && settlement === "null" && currentState) {
      generals = await General.findAndCountAll({
        limit,
        offset,
        where: {
          [Op.and]: [
            {
              callDate: {
                [Op.and]: [
                  { [Op.gt]: startCallDate },
                  { [Op.lt]: endCallDate },
                ],
              },
            },
            { currentState },
            { callNumber },
          ],
        },
      });
    } else if (callNumber === "null" && settlement && currentState) {
      generals = await General.findAndCountAll({
        limit,
        offset,
        where: {
          [Op.and]: [
            {
              callDate: {
                [Op.and]: [
                  { [Op.gt]: startCallDate },
                  { [Op.lt]: endCallDate },
                ],
              },
            },
            { currentState },
            { settlement },
          ],
        },
      });
    } else if (callNumber && settlement && currentState) {
      generals = await General.findAndCountAll({
        limit,
        offset,
        where: {
          [Op.and]: [
            {
              callDate: {
                [Op.and]: [
                  { [Op.gt]: startCallDate },
                  { [Op.lt]: endCallDate },
                ],
              },
            },
            { currentState },
            { callNumber },
            { settlement },
          ],
        },
      });
    }

    return res.json(generals);
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const general = await General.findOne({ where: { cardId } });
    return res.json(general);
  }

  async checkCommentsExistence(req, res) {
    return new Promise((resolve, reject) => {
      const { cardId } = req.params;
      General.findOne({
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

  async getCardInfo(req, res) {
    const { cardId } = req.params;
    const data = await General.findOne({
      where: { cardId },
    });
    return data;
  }

  async update(req, res) {
    const { cardId } = req.params;
    const {
      callNumber,
      shift,
      callDate,
      objectName,
      settlement,
      address,
      objectCharacteristic,
      objectDetection,
      currentState,
      hasComments,
    } = req.body;
    const general = await General.update(
      {
        callNumber,
        shift,
        callDate,
        objectName,
        settlement,
        address,
        objectCharacteristic,
        objectDetection,
        currentState,
        hasComments,
      },
      { where: { cardId } }
    );
    return res.json(general);
  }

  async delete(req, res) {
    const { cardId } = req.params;

    await ApplicationImage.findAll({
      where: { cardId },
    })
      .then((data) => {
        data.forEach((el) => {
          fs.unlinkSync(
            path.resolve(__dirname, "../..", "static", el.applicationImageId)
          );
        });
      })
      .catch((e) => {
        console.log(e);
      });

    const general = await General.destroy({ where: { cardId }, cascade: true });
    return res.json(general);
  }
}

module.exports = new GeneralController();
