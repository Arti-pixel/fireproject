const Router = require("express");
const router = new Router();
const CardAuthorController = require("../controllers/cardAuthorController");

router.post("/", CardAuthorController.create);
router.get("/:cardId", CardAuthorController.getOne);
router.put("/:cardId", CardAuthorController.update);

module.exports = router;
