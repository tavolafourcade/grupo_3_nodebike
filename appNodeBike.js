const express = require("express");
const path = require("path");

/*Llamando rutas*/
const mainRout = require("./routers/main.js");
const productsRout = require("./routers/products.js");
const usersRout = require("./routers/users.js");


const app = express();
const publicFolderPath = path.join(__dirname, "./public");/*cambié resolve por join */

app.listen(3060, () => {
    console.log("El servidor 3060 está corriendo");
});

app.use(express.static(publicFolderPath)); 
app.use(mainRout); /*Vista  home y productCart */
app.use(productsRout); /*Desarrollando*/
app.use(usersRout); /*Desarrollando*/

app.set("view engine", "ejs");
app.set('views', path.resolve(__dirname, 'views/'));

/*
app.get("/", (req, res) => {
    let htmlPathHome= path.resolve(__dirname, "./views/index.html");
    res.sendFile(htmlPathHome);
});

app.get("/product", (req, res) => {
    let htmlPathProduct= path.resolve(__dirname, "./views/product.html");
    res.sendFile(htmlPathProduct);
});

app.get("/productDetail", (req, res) => {
    let htmlPathProductDetail= path.resolve(__dirname, "./views/productDetail.html");
    res.sendFile(htmlPathProductDetail);
});

app.get("/productCart", (req, res) => {
    let htmlPathProductCart= path.resolve(__dirname, "./views/productCart.html");
    res.sendFile(htmlPathProductCart);
});

app.get("/register", (req, res) => {
    let htmlPathRegister= path.resolve(__dirname, "./views/register.html");
    res.sendFile(htmlPathRegister);
});

app.get("/login", (req, res) => {
    let htmlPathLogin= path.resolve(__dirname, "./views/login.html");
    res.sendFile(htmlPathLogin);
})

*/