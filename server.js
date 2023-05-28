const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("sequelize");

require('dotenv').config()

console.log(process.env.PORT);

const app = express();


const config = {
    application: {
        cors: {
            server: [{
                origin: "http://localhost:3000", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                credentials: true
            }]
        }
    }
}

app.use(cors(
    config.application.cors.server
));



// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;


db.sequelize.sync({ force: false })
.then(() => {
  console.log('Modelos sincronizados con la base de datos.');
})
.catch((error) => {
  console.error('Error al sincronizar los modelos:', error);
});


// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Api confecciones app udeaweb application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/venta.routes')(app);
require('./app/routes/producto.routes')(app);
require('./app/routes/productoAlmacen.routes')(app);
require('./app/routes/compra.routes')(app);
require('./app/routes/almacen.routes')(app);





// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "tercero"
    });

    Role.create({
        id: 3,
        name: "admin"
    });
}

