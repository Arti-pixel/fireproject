const Router = require("express");
const router = new Router();
const FireSituationCommentController = require("../../controllers/fireSituationController/fireSituationCommentController");
const checkRole = require("../../middleware/checkRoleMiddleware");

router.post("/", checkRole("checker"), FireSituationCommentController.create);
router.get("/:cardId", FireSituationCommentController.getOne);
router.put(
  "/:cardId",
  checkRole("checker"),
  FireSituationCommentController.update
);

module.exports = router;
