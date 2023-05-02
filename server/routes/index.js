const Router = require("express");
const router = new Router();
const generalRouter = require("./generalRouter");
const cardAuthorRouter = require("./cardAuthorRouter");
const userRouter = require("./userRouter");
const FireExtinguishingImageRouter = require("./FireExtinguishingImageRouter");
const FireTimeindicators = require("./FireTimeindicatorsRouter");

router.use("/user", userRouter);
router.use("/general", generalRouter);
router.use("/cardAuthor", cardAuthorRouter);
router.use("/fireImage", FireExtinguishingImageRouter);
router.use("/fireTimeindicators", FireTimeindicators);

module.exports = router;
