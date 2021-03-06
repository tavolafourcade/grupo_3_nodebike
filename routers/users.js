let express = require("express");
let router= express.Router();
const path=require("path");
const{body} = require("express-validator");//usando express validator 
let usersController = require("../controllers/usersController");
let guestMiddleware = require('../middlewares/guestMiddleware');


const multer = require("multer");

const multerDiskStorage=multer.diskStorage({
    destination: function(req,file,callback){
        let folder=path.join(__dirname, "../public/images/avatars");
        callback(null,folder);
    }, 
    filename: function(req,file,callback){
        let imageName="group-" + Date.now() + path.extname(file.originalname);
        callback(null, imageName);
        //callback(null, "${Date.now()}_img_${path.extname(file.originalname)}");
    }

});
//ruta para procesar y almacenar archivos
const fileUpload = multer({storage: multerDiskStorage});


//Creando array con valaidaciones de formulario register
const validateRegisterForm = [
    body("nombre")
        .notEmpty().withMessage("Debes completar el campo").bail()
        .isLength({min:2, max:10}).withMessage("El campo debe contener como mínimo 2 letras y como máximo 10"),
    body("apellidoPaterno")
        .notEmpty().withMessage("Debes completar el campo").bail()//cortando cadena de vaidación con bail
        .isLength({min:2}).withMessage("El campo debe contener como mínimo 2 letras"),//verificando longitud de los datos
    body("apellidoMaterno")
        .notEmpty().withMessage("Debes completar el campo").bail()
        .isLength({min:2}).withMessage("El campo debe contener como mínimo 2 letras"),
    body("email").isEmail().withMessage("Debe ser un email válido"),
    body("password")
        .notEmpty().withMessage("Debes completar el campo").bail()
        .isLength({min:7}).withMessage("El campo debe contener como mínimo 7 letras"),
    body("passwordx2")
        .notEmpty().withMessage("Debes completar el campo").bail()
        .isLength({min:7}).withMessage("El campo debe contener como mínimo 7 letras"),
    body("numeroDocumento")
        .notEmpty().withMessage("Debes completar el campo").bail()
        .isLength({min:8}).withMessage("El campo debe contener como mínimo 8 números"),
    body("celular")
        .notEmpty().withMessage("Debes completar el campo").bail()
        .isLength({min:9}).withMessage("El campo debe contener como mínimo 9 números, y se debe incluir el código de país"),
];

router.get("/register", guestMiddleware, usersController.register);//create

//Esta ruta se encargará de procesar el registro
router.post("/register", [fileUpload.single("imagenUsuario"), validateRegisterForm], usersController.processRegister);


router.get("/profile/:userId", usersController.profile);


//comentando todo para probar validation
/*router.get("/list", usersController.list);
router.get("/search", usersController.search);

router.get("/edit/:idUser", usersController.edit);
router.put("/edit/:idUser", usersController.edit);

router.delete("/delete/:idUser", function(req,res){
    res.send("SOY DELETE!");
})
*/
router.get('/login', usersController.login);
router.post('/login',usersController.processLogin);
router.get('/list', usersController.list);
router.get('/:id', usersController.show);
router.get('/search', usersController.search);

router.get('/check',(req,res)=>{
    if (req.session.usuarioLogueado == undefined){
        res.send("No estas logueado");
    }else{
        res.send("El usuario esta logueado" + req.session.usuarioLogueado.email);
    }
})
// router.post('/login',
//     check('email').isEmail().withMessage('Email invalido'),usersController.processLogin);  
module.exports = router;