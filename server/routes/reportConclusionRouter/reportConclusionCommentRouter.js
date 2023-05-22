const Router = require("express");
const router = new Router();
const ReportConclusionCommentController = require("../../controllers/reportConclusion/reportConclusionCommentController");
const checkRole = require("../../middleware/checkRoleMiddleware");

router.post(
  "/",
  checkRole("checker"),
  ReportConclusionCommentController.create
);
router.get("/:cardId", ReportConclusionCommentController.getOne);
router.put(
  "/:cardId",
  checkRole("checker"),
  ReportConclusionCommentController.update
);

module.exports = router;
