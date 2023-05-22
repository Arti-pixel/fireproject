const Router = require("express");
const router = new Router();
const fireTimeindicatorsCommentController = require("../../controllers/fireTimeindicatorsController/fireTimeindicatorsCommentController");
const checkRole = require("../../middleware/checkRoleMiddleware");

router.post(
  "/",
  checkRole("checker"),
  fireTimeindicatorsCommentController.create
);
router.get("/:cardId", fireTimeindicatorsCommentController.getOne);
router.put(
  "/:cardId",
  checkRole("checker"),
  fireTimeindicatorsCommentController.update
);

module.exports = router;
