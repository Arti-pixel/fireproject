const Router = require("express");
const router = new Router();
const generalCommentController = require("../../controllers/generalController/generalCommentController");
const checkRole = require("../../middleware/checkRoleMiddleware");

router.post("/", generalCommentController.create);
router.get("/:cardId", generalCommentController.getOne);
router.put("/:cardId", generalCommentController.update);

module.exports = router;
