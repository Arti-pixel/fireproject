const Router = require("express");
const router = new Router();
const FireResultsController = require("../../controllers/fireResultsController/fireResultsController");

// router.post("/", FireResultsController.create);
router.get("/:cardId", FireResultsController.getOne);
router.put("/:cardId", FireResultsController.update);

module.exports = router;
