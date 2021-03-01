const path= require("path");
const fs = require('fs');
const productsFilePath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

let mainController = { 

    createProduct: (req, res) => {
        /*res.sendFile(path.resolve(__dirname, "../views/products/createProduct.ejs"));*/
        res.render("products/createProduct");

    },

    editProduct: function(req, res) {
        res.render("products/editProduct");
        /*let idProducto = req.params.id || "Sin ID";*/
    },

    productDetail: (req, res) => {
        res.render( "products/productDetail");
    },

    productList:(req, res) =>{
        res.render( "products/productList", {products: products});
    }

};

module.exports = mainController;