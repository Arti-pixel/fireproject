const Router = require("express");
const router = new Router();
const FireResultsCommentController = require("../../controllers/fireResultsController/FireResultsCommentController");
const checkRole = require("../../middleware/checkRoleMiddleware");

router.post("/", checkRole("checker"), FireResultsCommentController.create);
router.get("/:cardId", FireResultsCommentController.getOne);
router.put(
  "/:cardId",
  checkRole("checker"),
  FireResultsCommentController.update
);

module.exports = router;
