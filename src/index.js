const express = require('express');
const methodOverride = require('method-override');
const app = express();

//Debemos decirle a node - Donde estan nuestros archivos estáticos
app.use(express.static('public'));

//Setear cual va a corresponder Template Engine  - EJS 
app.set('view engine','ejs');

//Considerar que al enviar los datos desde el formulario los mismos lleguen al Servidor
app.use(express.urlencoded({extended: false}));
//Middleware para determinar metodos HTTP distintos a los aceptados por los formularios (GET - POST)
app.use(methodOverride('_method'));

//Rutas  - Requerir archivo donde esta la ruta
const webRoutes = require('./routes/webRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const adminRoutes = require('./routes/adminRoutes');
const platosRoutes = require('./routes/platosRoutes');

//Usar ese archivo de rutas
app.use(webRoutes);
app.use(usuariosRoutes);
app.use(adminRoutes);
app.use(platosRoutes);
//Levantar nuestro servidor
app.listen(3000,()=>console.log('Servidor corriendo en el puerto 3000'));