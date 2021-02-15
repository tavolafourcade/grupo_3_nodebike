const path= require("path");

let mainController = { 

    createProduct: (req, res) => {
        /*res.sendFile(path.resolve(__dirname, "../views/products/createProduct.ejs"));*/
        res.render("createProduct");

    },

    editProduct: function(req, res) {
        res.render("editProduct");
        let idProducto = req.params.id || "Sin ID";

    },

    productDetail: (req, res) => {
        res.render( "productDetail");

    },

    productList:(req, res) =>{
        res.render( "productList");

    }


};

module.exports = mainController;