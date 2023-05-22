const Router = require("express");
const router = new Router();
const FeaturesOfFireExtinguishingController = require("../../controllers/featuresOfFireExtinguishingController/featuresOfFireExtinguishingController");

// router.post("/", FeaturesOfFireExtinguishingController.create);
router.get("/:cardId", FeaturesOfFireExtinguishingController.getOne);
router.put("/:cardId", FeaturesOfFireExtinguishingController.update);

module.exports = router;
