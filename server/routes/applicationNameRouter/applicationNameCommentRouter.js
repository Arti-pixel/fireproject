const Router = require("express");
const router = new Router();
const ApplicationNameCommentController = require("../../controllers/applicationNameController/applicationNameCommentController");
const checkRole = require("../../middleware/checkRoleMiddleware");

router.post("/", checkRole("checker"), ApplicationNameCommentController.create);
router.get("/:cardId", ApplicationNameCommentController.getOne);
router.put(
  "/:cardId",
  checkRole("checker"),
  ApplicationNameCommentController.update
);

module.exports = router;
