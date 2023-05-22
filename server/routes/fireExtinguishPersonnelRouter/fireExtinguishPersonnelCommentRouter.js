const Router = require("express");
const router = new Router();
const FireExtinguishPersonnelCommentController = require("../../controllers/fireExtinguishPersonnelController/fireExtinguishPersonnelCommentController");
const checkRole = require("../../middleware/checkRoleMiddleware");

router.post(
  "/",
  checkRole("checker"),
  FireExtinguishPersonnelCommentController.create
);
router.get("/:cardId", FireExtinguishPersonnelCommentController.getOne);
router.put(
  "/:cardId",
  checkRole("checker"),
  FireExtinguishPersonnelCommentController.update
);

module.exports = router;
