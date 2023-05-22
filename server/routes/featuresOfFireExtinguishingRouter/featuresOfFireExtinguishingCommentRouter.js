const Router = require("express");
const router = new Router();
const FeaturesOfFireExtinguishingCommentController = require("../../controllers/featuresOfFireExtinguishingController/featuresOfFireExtinguishingCommentController");
const checkRole = require("../../middleware/checkRoleMiddleware");

router.post(
  "/",
  checkRole("checker"),
  FeaturesOfFireExtinguishingCommentController.create
);
router.get("/:cardId", FeaturesOfFireExtinguishingCommentController.getOne);
router.put(
  "/:cardId",
  checkRole("checker"),
  FeaturesOfFireExtinguishingCommentController.update
);

module.exports = router;
