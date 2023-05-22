const Router = require("express");
const router = new Router();
const allTablesController = require("../controllers/allTableslController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("user"), allTablesController.create);
router.get(
  "/commentsExistence/:cardId",
  allTablesController.checkCommentsExistence
);

module.exports = router;
