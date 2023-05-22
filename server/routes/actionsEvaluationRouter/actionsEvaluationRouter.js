const Router = require("express");
const router = new Router();
const ActionsEvaluationController = require("../../controllers/actionsEvaluationController/actionsEvaluationController");

// router.post("/", ActionsEvaluationController.create);
router.get("/:cardId", ActionsEvaluationController.getOne);
router.put("/:cardId", ActionsEvaluationController.update);

module.exports = router;
