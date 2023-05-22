const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");

const allTablesRouter = require("./allTablesRouter");

const generalRouter = require("./generalRouter/generalRouter");
const generalCommentRouter = require("./generalRouter/generalCommentRouter");

const fireTimeindicatorsRouter = require("./fireTimeindicatorsRouter/fireTimeindicatorsRouter");
const fireTimeindicatorsCommentRouter = require("./fireTimeindicatorsRouter/fireTimeindicatorsCommentRouter");

const waterSupplyRouter = require("./waterSupplyRouter/waterSupplyRouter");
const waterSupplyCommentRouter = require("./waterSupplyRouter/waterSupplyCommentRouter");

const fireSituationRouter = require("./fireSituationRouter/fireSituationRouter");
const fireSituationCommentRouter = require("./fireSituationRouter/fireSituationCommentRouter");

const actionsEvaluationRouter = require("./actionsEvaluationRouter/actionsEvaluationRouter");
const actionsEvaluationCommentRouter = require("./actionsEvaluationRouter/actionsEvaluationCommentRouter");

const featuresOfFireExtinguishingRouter = require("./featuresOfFireExtinguishingRouter/featuresOfFireExtinguishingRouter");
const featuresOfFireExtinguishingCommentRouter = require("./featuresOfFireExtinguishingRouter/featuresOfFireExtinguishingCommentRouter");

const fireExtinguishPersonnelRouter = require("./fireExtinguishPersonnelRouter/fireExtinguishPersonnelRouter");
const fireExtinguishPersonnelCommentRouter = require("./fireExtinguishPersonnelRouter/fireExtinguishPersonnelCommentRouter");

const fireOthersRouter = require("./fireOthersRouter/fireOthersRouter");
const fireOthersCommentRouter = require("./fireOthersRouter/fireOthersCommentRouter");

const fireResultsRouter = require("./fireResultsRouter/fireResultsRouter");
const fireResultsCommentRouter = require("./fireResultsRouter/fireResultsCommentRouter");

const reportConclusionRouter = require("./reportConclusionRouter/reportConclusionRouter");
const reportConclusionCommentRouter = require("./reportConclusionRouter/reportConclusionCommentRouter");

const applicationNameRouter = require("./applicationNameRouter/applicationNameRouter");
const applicationNameCommentRouter = require("./applicationNameRouter/applicationNameCommentRouter");

const applicationImageRouter = require("./applicationImageRouter/applicationImageRouter");
const applicationImageCommentRouter = require("./applicationImageRouter/applicationImageCommentRouter");

router.use("/allTables", allTablesRouter);

router.use("/user", userRouter);

router.use("/general", generalRouter);
router.use("/generalComment", generalCommentRouter);

router.use("/fireTimeindicators", fireTimeindicatorsRouter);
router.use("/fireTimeindicatorsComment", fireTimeindicatorsCommentRouter);

router.use("/waterSupply", waterSupplyRouter);
router.use("/waterSupplyComment", waterSupplyCommentRouter);

router.use("/fireSituation", fireSituationRouter);
router.use("/fireSituationComment", fireSituationCommentRouter);

router.use("/actionsEvaluation", actionsEvaluationRouter);
router.use("/actionsEvaluationComment", actionsEvaluationCommentRouter);

router.use("/featuresOfFireExtinguishing", featuresOfFireExtinguishingRouter);
router.use(
  "/featuresOfFireExtinguishingComment",
  featuresOfFireExtinguishingCommentRouter
);

router.use("/fireExtinguishPersonnel", fireExtinguishPersonnelRouter);
router.use(
  "/fireExtinguishPersonnelComment",
  fireExtinguishPersonnelCommentRouter
);

router.use("/fireOthers", fireOthersRouter);
router.use("/fireOthersComment", fireOthersCommentRouter);

router.use("/fireResults", fireResultsRouter);
router.use("/fireResultsComment", fireResultsCommentRouter);

router.use("/reportConclusion", reportConclusionRouter);
router.use("/reportConclusionComment", reportConclusionCommentRouter);

router.use("/applicationName", applicationNameRouter);
router.use("/applicationNameComment", applicationNameCommentRouter);

router.use("/applicationImage", applicationImageRouter);
router.use("/applicationImageComment", applicationImageCommentRouter);

module.exports = router;
