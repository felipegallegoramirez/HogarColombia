const express = require('express');
const morgan = require('morgan');
const path = require('path');


const {router} = require('./routes/index.ts')



// inicializacion de variable de express para poder ser utilizados
const app = express()

// configuracion del puerto
app.set('port', process.env.PORT || 3000);//definicion del puerto (enviadoporelhost||pordefecto3000)


// Middlewares
app.use(morgan('dev')); //sirve para mostrar todo lo que pasa por consola (get,delete...etc etc)
//app.use(cors());
app.use(express.json());//para decile al servidor que lea


// rutas donde se accederan todos los metodos de peticion... es decir este archivo contendra todas las rutas para hacer utilizacion de esta
//app.use('/api', indexRoutes);

// es la ruta donde se guardaran todos los archivos (jpg,png... en construccion) ingresados 
app.use('/Storage', express.static(path.resolve('Storage')));

module.exports = app