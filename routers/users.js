let express = require("express");
let router= express.Router();

let usersController = require("../controllers/usersController");

router.get("/login", usersController.login);
router.get("/register", usersController.register);
router.get("/list", usersController.list);
router.get("/search", usersController.search);
/*router.get("/edit/:idUser", usersController.edit)*/


module.exports = router;