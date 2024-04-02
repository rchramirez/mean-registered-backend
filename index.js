process.env.TZ = 'America/Argentina/Buenos_Aires';
const express = require('express');
const conectarDB = require('./config/db')
const cors = require('cors')

//Creamos el servidor
const app = express();

//Conectamos a la BD
conectarDB();

app.use(cors());

app.use(express.json());

app.use('/api/enrolleds', require('./routes/enrolled'));

app.listen(4000, () => {
    console.log('Server run successfully')
})