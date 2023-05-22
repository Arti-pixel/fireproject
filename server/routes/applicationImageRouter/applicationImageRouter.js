const Router = require("express");
const router = new Router();
const ApplicationImageController = require("../../controllers/applicationImageController/applicationImageController");
const checkRole = require("../../middleware/checkRoleMiddleware");

router.post("/:cardId", ApplicationImageController.create);
router.get("/:cardId", ApplicationImageController.getOne);
router.put("/:cardId", ApplicationImageController.update);
router.delete("/:cardId", checkRole("user"), ApplicationImageController.delete);

module.exports = router;
