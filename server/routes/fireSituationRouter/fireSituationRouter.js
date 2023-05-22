const Router = require("express");
const router = new Router();
const FireSituationController = require("../../controllers/fireSituationController/FireSituationController");

// router.post("/", FireSituationController.create);
router.get("/:cardId", FireSituationController.getOne);
router.put("/:cardId", FireSituationController.update);

module.exports = router;
