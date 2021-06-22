const path= require("path");
const {validationResult} = require("express-validator");
const jsonTable = require('../data/jsonTable');
const usersModel = jsonTable('users');
const fs = require('fs');
let usersFilePath =  path.resolve(__dirname, '../data/users.json');
let usersFile = fs.readFileSync(usersFilePath, 'utf-8');

// Requiriendo la BD
let db = require('../database/models');
const Usuario = require("../database/models/Usuario");

let mainController = { 

    register: (req, res) => {
        res.render("users/register");

    },

    processRegister: (req,res) => {
        //console.log("processRegister")
        const resultValidationForm = validationResult(req);
       
        if(resultValidationForm.errors.length > 0) {
            console.log("El error es", resultValidationForm.errors)
            return res.render("users/register", {
                errors: resultValidationForm.mapped(),
            });
        }else{
            console.log("processRegister sin error")
            let {nombre, apellidoPaterno, email,password, category_id, avatar_image} = req.body;
            let image = req.file.filename;

            let user = {
                first_name: nombre,
                last_name: apellidoPaterno,
                email,
                password,
                category_id: 3, 
                avatar_image: image
            };

            db.Usuarios.create(user).then(data => {
                console.log('Return de user', data)
                
                return data})
                .catch(error => console.log('El error fue', error))

            res.redirect('/');

        };
    },     
    
    login: (req, res) => {
        res.render("users/login");

    },

    profile: (req,res) =>{
        res.render("users/profile");
    },

    processLogin: (req,res)=>{
        let errors = validationResult(req);

        if (errors.isEmpty()){
            let usersJSON = fs.readFileSync(usersFilePath, 'utf-8', {errors: errors.errors})
            
            let users;
            let usuarioAloguearse;
            if (usersFile == ""){
                users = [];
            }else{
                users = JSON.parse(usersJSON); 
            }
            for (let i = 0; i < users.length; i++){
                if (users[i].email == req.body.email){
                    if (users[i].password == req.body.password){
                        usuarioAloguearse = users[i];
                        break;
                    }
                }
            }
            if (usuarioAloguearse == undefined){
                return res.render('users/login', {errors: [
                    {msg: 'Credenciales invalidas'}
                ]});
            
            }
            req.session.usuarioLogueado = usuarioAloguearse;
            res.redirect('/');
        }else{
            return res.render('users/login', {errors: errors.errors});
        }
    },

    /* Metodo que consulta todas sus peliculas */
    /* Consulta de tipo GET */
    list: function(req,res){
        // console.log("Data de db", db)
        /* Previous version that list users */
        // db.Usuarios.findAll()
        // .then(function(Usuarios){
        //     console.log("Usuarios content", Usuarios)
        //     res.render("users/list", {Usuarios: Usuarios})
        //})

        /* EndPoint del API donde selecciono todas las películas */
        db.Usuarios
            .findAll()
            .then(usuarios => {
                /*return res.status(200).json({
                    total: usuarios.length,
                    datos: usuarios,
                    status: 200
                })*/
                res.render("users/list", {"Usuarios": usuarios});
            })
        /*Compartir la variable con la vista para que muestre el html */
        

    },

    /*Metodo que consulta una pelicula en particular */
    /* Consulta de tipo GET */
    show: function(req,res){
        db.Usuarios
        .findByPk(req.params.id)
        .then(usuario => {
            return res.status(200).json({
                datos: usuario,
                status: 200
            })
        })
    },

    /* Metodo para crear un usuario */
    /* Consulta de tipo POST */

    search: function(req,res){
        let userSearch = req.query.search;

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