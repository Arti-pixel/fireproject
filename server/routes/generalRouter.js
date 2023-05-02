const Router = require("express");
const router = new Router();
const generalController = require("../controllers/generalController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("user"), generalController.create);
router.get("/", generalController.getAll);
router.get("/:cardId", generalController.getOne);
router.put("/:cardId", generalController.update);
router.delete("/:cardId", generalController.delete);

module.exports = router;
