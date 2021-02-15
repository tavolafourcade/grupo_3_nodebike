const path= require("path");

let mainController = { 

    login: (req, res) => {
        res.render("login");

    },

    register: (req, res) => {
        res.render("register");

    },


};

module.exports = mainController;