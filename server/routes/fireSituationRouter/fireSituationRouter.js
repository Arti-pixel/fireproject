const Router = require("express");
const router = new Router();
const FireSituationController = require("../../controllers/fireSituationController/fireSituationController");

// router.post("/", FireSituationController.create);
router.get("/:cardId", FireSituationController.getOne);
router.put("/:cardId", FireSituationController.update);

module.exports = router;
