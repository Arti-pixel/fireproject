const Router = require("express");
const router = new Router();
const pdfmakeController = require("../controllers/pdfmakeController");

router.get("/:cardId", pdfmakeController.create);

module.exports = router;
