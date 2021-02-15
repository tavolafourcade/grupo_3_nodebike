let express = require("express");
let router= express.Router();

let mainController = require("../controllers/mainController");

router.get("/home", mainController.index);
router.get("/productCart", mainController.productCart);

module.exports = router;