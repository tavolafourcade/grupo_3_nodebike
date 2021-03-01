const express = require("express");
const path = require("path");
const methodOverride= require("method-override");

/*Llamando rutas*/
const mainRout = require("./routers/main.js");
const productsRout = require("./routers/products.js");
const usersRout = require("./routers/users.js");
const logMiddleware = require("./middlewares/logMiddleware");


const app = express();
const publicFolderPath = path.join(__dirname, "./public");/*cambié resolve por join */
//const direction=path.dirname(publicFolderPath);
//console.log(direction);

app.listen(3060, () => {
    console.log("El servidor 3060 está corriendo");
});

app.set("view engine", "ejs");
app.set('views', path.resolve(__dirname, 'views/'));

app.post(logMiddleware);

////app.use(logger("dev"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
////app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./public")));
app.use(methodOverride("_method"));

app.use(express.static(publicFolderPath)); 
app.use(mainRout); /*Vista  home y productCart */
app.use(productsRout); /*Desarrollando*/
app.use("/users", usersRout); /*Desarrollando*/


app.use((req,res,next)=>{
    res.status(404).render("error");
});