const mongoose = require('mongoose');
require("dotenv").config({ path: 'variables.env'});

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: true // ya no es soportada por MongoDB o cambiarle a true
        })
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(error);
        process.exit(1);// DETENEMOS LA APP
    } 
}

module.exports = conectarDB