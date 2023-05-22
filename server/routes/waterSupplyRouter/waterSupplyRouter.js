const Router = require("express");
const router = new Router();
const WaterSupplyController = require("../../controllers/waterSupplyController/waterSupplyController");

// router.post("/", WaterSupplyController.create);
router.get("/:cardId", WaterSupplyController.getOne);
router.put("/:cardId", WaterSupplyController.update);

module.exports = router;
