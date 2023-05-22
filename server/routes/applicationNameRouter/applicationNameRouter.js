const Router = require("express");
const router = new Router();
const ApplicationNameController = require("../../controllers/applicationNameController/applicationNameController");

// router.post("/", ApplicationNameController.create);
router.get("/:cardId", ApplicationNameController.getOne);
router.put("/:cardId", ApplicationNameController.update);

module.exports = router;
