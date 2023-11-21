const express = require('express');
const bodyParser = require("body-parser")
const path = require('path');

const usuarios = require('./api/usuarios')

const app = express()
const port = 3080

/* Esta e sla parte del Middleware */
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());

// Dependiendo de la url mandarlo a un API; es decir, si se ejecuta esa url se ejecuta la API
app.use('/personas', usuarios)

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(port, () => {
    console.log(`Server escuchando en el port::${port}`);
});

