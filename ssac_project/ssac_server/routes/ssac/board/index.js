var express = require("express");
var router = express.Router();

const BoardController = require("../../../controllers/ssac/board/BoardController");

router.get("/", BoardController.readAllBoard);
router.get("/:idx", BoardController.detailBoard);
router.post("/", BoardController.uploadBoard);
router.delete("/:idx", BoardController.deleteBoard);

module.exports = router;
