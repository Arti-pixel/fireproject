const Router = require("express");
const router = new Router();
const FireExtinguishingImageController = require("../controllers/FireExtinguishingImageController");

router.post("/", FireExtinguishingImageController.create);
router.get("/:cardId", FireExtinguishingImageController.getOne);
router.put("/:cardId", FireExtinguishingImageController.update);

module.exports = router;
