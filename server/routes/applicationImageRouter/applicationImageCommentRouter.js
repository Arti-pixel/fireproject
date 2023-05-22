const Router = require("express");
const router = new Router();
const ApplicationImageCommentController = require("../../controllers/applicationImageController/applicationImageCommentController");
const checkRole = require("../../middleware/checkRoleMiddleware");

router.post(
  "/",
  checkRole("checker"),
  ApplicationImageCommentController.create
);
router.get("/:cardId", ApplicationImageCommentController.getOne);
router.put(
  "/:cardId",
  checkRole("checker"),
  ApplicationImageCommentController.update
);

module.exports = router;
