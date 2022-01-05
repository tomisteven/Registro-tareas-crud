//configuramos el servidor

import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

const app = express();

//donde esta el motor de plantillas handlebars
app.set('views', path.join(__dirname, 'views'));

//configuramos el motor de plantillas hbs de express

const exphbs = create({
    extname      :'.hbs',
    layoutsDir   : path.join(app.get("views"), "layouts"),
    partialsDir   : path.join(app.get("views"), "partials"),
    defaultLayout: 'main'
});
app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

//middlewares
app.use(morgan('dev')); //al ejecutar la app, se va a mostrar en consola el estado de la peticion
app.use(express.urlencoded({
    extended:false
}))
//rutas
app.use(indexRoutes);
//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;