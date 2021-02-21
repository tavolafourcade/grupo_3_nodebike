const path= require("path");

let mainController = { 

    login: (req, res) => {
        res.render("users/login");

    },

    register: (req, res) => {
        res.render("users/register");

    },
/*AGREGANDO VISTAS---FALTA AGREGAR VISTAS*/
    list: (req,rest)=>{
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

    search: (req,res)=>{
        res.render("users/search");
    },

    edit:function(req,res){
        let idUser=req.params.idUser; /*idUser es lo que he defnido en el router */
        res.send(idUser);
    }



};

module.exports = mainController;