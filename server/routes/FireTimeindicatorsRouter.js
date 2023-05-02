const Router = require("express");
const router = new Router();
const FireTimeindicatorsController = require("../controllers/FireTimeindicatorsController");

router.post("/", FireTimeindicatorsController.create);
router.get("/:cardId", FireTimeindicatorsController.getOne);
router.put("/:cardId", FireTimeindicatorsController.update);

module.exports = router;
