const express = require("express");
const cors = require("cors");
const conectarDB = require("./config/db");

// Creamos el servidor
const app = express();

// Habilitar CORS
app.use(cors());

// COnectar a la DB
conectarDB();

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () => {
    console.log("El servidor esta corriendo perfectamente");
})


// clave DB image.png