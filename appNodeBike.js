let express = require("express");

const path = require("path");

const app = express();

const publicFolderPath = path.resolve(__dirname, "./public");
app.use(express.static(publicFolderPath));

app.listen(3060, () => {
    console.log("El servidor 3060 está corriendo");
});

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