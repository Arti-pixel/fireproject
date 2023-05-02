const { General } = require("../models/models");
const { FireExtinguishingImage } = require("../models/models");
const fs = require("fs");
const path = require("path");
const ApiError = require("../error/ApiError");
const { Op } = require("sequelize");

class GeneralController {
  async create(req, res) {
    let {
      userId,
      callNumber,
      shift,
      callDate,
      objectName,
      settlement,
      address,
      objectCharacteristic,
      objectDetection,
    } = req.body;

    callNumber = callNumber ? callNumber : "-";

    const general = await General.create({
      userId,
      callNumber,
      shift,
      callDate,
      objectName,
      settlement,
      address,
      objectCharacteristic,
      objectDetection,
    });

    return res.json(general);
  }

  async getAll(req, res) {
    let { filterPropeties, limit, page } = req.query;
    const { startCallDate, endCallDate, callNumber, settlement } =
      filterPropeties;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;

    let generals;

    if (callNumber === "null" && settlement === "null") {
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
    } else if (callNumber && settlement === "null") {
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
    } else if (callNumber === "null" && settlement) {
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
    } else if (callNumber && settlement) {
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
    }

    return res.json(generals);
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const general = await General.findOne({ where: { cardId } });
    return res.json(general);
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
      },
      { where: { cardId } }
    );
    return res.json(general);
  }
  async delete(req, res) {
    const { cardId } = req.params;

    await FireExtinguishingImage.findOne({
      where: { cardId },
    })
      .then((data) => {
        fs.unlinkSync(path.resolve(__dirname, "..", "static", data.image));
      })
      .catch((e) => {
        console.log(e);
      });

    const general = await General.destroy({ where: { cardId } });
    return res.json(general);
  }
}

module.exports = new GeneralController();
