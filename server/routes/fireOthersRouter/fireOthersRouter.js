const Router = require("express");
const router = new Router();
const FireOthersController = require("../../controllers/fireOthersController/fireOthersController");

// router.post("/", FireOthersController.create);
router.get("/:cardId", FireOthersController.getOne);
router.put("/:cardId", FireOthersController.update);

module.exports = router;
