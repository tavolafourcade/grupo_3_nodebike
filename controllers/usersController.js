const path= require("path");
const {validationResult} = require("express-validator");
const jsonTable = require('../data/jsonTable');
const usersModel = jsonTable('users');
const fs = require('fs');
let usersFilePath =  path.resolve(__dirname, '../data/users.json');
let usersFile = fs.readFileSync(usersFilePath, 'utf-8');


let mainController = { 

    register: (req, res) => {
        res.render("users/register");

    },

    processRegister: (req,res) => {
        const resultValidationForm = validationResult(req);
       

        if(resultValidationForm.errors.length > 0) {
            return res.render("users/register", {
                errors: resultValidationForm.mapped(),
            });
        }else{
            let {id, nombre, apellidoPaterno, email,password, category} = req.body;
            let image = req.file.filename;

            let user = {
                id: null,
                first_name: nombre,
                last_name: apellidoPaterno,
                email,
                password,
                category: 'user', 
                image
            };

            let users;

            if ( usersFile === '' ) {
                users = [];
            } else {
                users = JSON.parse(usersFile);
            }

            user.id = users.length + 1;
            console.log(user);
            users.push(user);
            usersJSON = JSON.stringify(users);
            fs.writeFileSync(usersFilePath, usersJSON);

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
            res.render('products/productList');
        }else{
            return res.render('users/login', {errors: errors.errors});
        }
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