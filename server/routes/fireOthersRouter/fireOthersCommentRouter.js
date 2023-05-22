const Router = require("express");
const router = new Router();
const FireOthersCommentController = require("../../controllers/fireOthersController/fireOthersCommentController");
const checkRole = require("../../middleware/checkRoleMiddleware");

router.post("/", checkRole("checker"), FireOthersCommentController.create);
router.get("/:cardId", FireOthersCommentController.getOne);
router.put(
  "/:cardId",
  checkRole("checker"),
  FireOthersCommentController.update
);

module.exports = router;
