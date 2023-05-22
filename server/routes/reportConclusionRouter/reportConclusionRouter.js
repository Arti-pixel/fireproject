const Router = require("express");
const router = new Router();
const ReportConclusionController = require("../../controllers/reportConclusion/reportConclusionController");

// router.post("/", ReportConclusionController.create);
router.get("/:cardId", ReportConclusionController.getOne);
router.put("/:cardId", ReportConclusionController.update);

module.exports = router;
