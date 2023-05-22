const Router = require("express");
const router = new Router();
const ActionsEvaluationCommentController = require("../../controllers/actionsEvaluationController/actionsEvaluationCommentController");
const checkRole = require("../../middleware/checkRoleMiddleware");

router.post(
  "/",
  checkRole("checker"),
  ActionsEvaluationCommentController.create
);
router.get("/:cardId", ActionsEvaluationCommentController.getOne);
router.put(
  "/:cardId",
  checkRole("checker"),
  ActionsEvaluationCommentController.update
);

module.exports = router;
