const Router = require("express");
const router = new Router();
const WaterSupplyCommentController = require("../../controllers/waterSupplyController/waterSupplyCommentController");
const checkRole = require("../../middleware/checkRoleMiddleware");

router.post("/", checkRole("checker"), WaterSupplyCommentController.create);
router.get("/:cardId", WaterSupplyCommentController.getOne);
router.put(
  "/:cardId",
  checkRole("checker"),
  WaterSupplyCommentController.update
);

module.exports = router;
