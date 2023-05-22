const Router = require("express");
const router = new Router();
const FireExtinguishPersonnelController = require("../../controllers/fireExtinguishPersonnelController/fireExtinguishPersonnelController");

// router.post("/", FireExtinguishPersonnelController.create);
router.get("/:cardId", FireExtinguishPersonnelController.getOne);
router.put("/:cardId", FireExtinguishPersonnelController.update);

module.exports = router;
