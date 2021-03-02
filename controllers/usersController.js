const path= require("path");
const {validationResult} = require("express-validator");
const jsonTable = require('../database/jsonTable');
const usersModel = jsonTable('users');


let mainController = { 

    register: (req, res) => {
        res.render("users/register");

    },

    processRegister: (req,res) => {
        const resultValidationForm = validationResult(req);

        if(resultValidationForm.errors.length > 0) {
            return res.render("users/register", {
                errors: resultValidationForm.mapped(),
                oldData: req.body,
            });
        }
        return res.render("users/login");
    },     
    
    login: (req, res) => {
        res.render("users/login");

    },

    profile: (req,res) =>{
        res.render("users/profile");
    },

  


/*AGREGANDO VISTAS---FALTA AGREGAR VISTAS*/
    list: (req,res)=>{
        let users=[
            {id:1 , name:"Dario"},
            {id:2 , name:"Manuel"},
            {id:3 , name:"Barl"},
            {id:4 , name:"Juan"},
            {id:5 , name:"Paul"},
        ];
        /*Compartir la variable con la vista para que muestre el html */
        res.render("users/list", {"usersController": users});

    },

    search: function(req,res){
        let loQueBuscaElUsuario = req.query.search;

        let users=[
            {id:1 , name:"Dario"},
            {id:2 , name:"Manuel"},
            {id:3 , name:"Barl"},
            {id:4 , name:"Juan"},
            {id:5 , name:"Paul"},
        ];

        let search=[];

        for(let i=0; i<users.length; i++){
            if(users[i].name.includes(loQueBuscaElUsuario)){
                search.push(users[i]);

            }
        }

        res.render("users/search", {"search": search}); /*Revisar router, controller, app para esta línea. Reñación cocn userResults */
    },
 

    create:function(req,res){ //cambiar nombre  y colocarle store
        let usuario ={
            //obtener información de formularios, usando del nombre de los input
            nombre: req.body.name,
            apellidoPaterno: req.body.apellidoPaterno,
            apellidoMaterno: req.body.apellidoMaterno,
            email: req.body.email,
            password: req.body.password,
            passwordx2: req.body.passwordx2,
            pais: req.body.paises,
            tipoDocumento: req.body.tipoDocumento,
            numeroDocumento: req.body.numeroDocumento,
            genero: req.body.genero,
            fechaNacimiento: req.body.fechaNacimiento,
            celular: req.body.celular,
            condicion: req.body.condicion,

    
        };

        let errors = validadateRegisterForm(req);

         //guardarla
        console.log(require.file);
         res.redirect("users/list"); //me debe permitir una vez cargados los datos, ver la lista commppleta
    },

    
    edit: function(req,res){
        let idUser = req.params.idUser; /*idUser es lo que he defnido en el router */

        let users=[
            {id:1 , name:"Dario"},
            {id:2 , name:"Manuel"},
            {id:3 , name:"Barl"},
            {id:4 , name:"Juan"},
            {id:5 , name:"Paul"},
        ];

        let userToEdit = users[idUser]

        res.render("users/edit", {userToEdit:userToEdit});

    },



};

module.exports = mainController;