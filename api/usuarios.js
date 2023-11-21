const express = require('express')

const db = require('../db/config/config')

const ruta = express.Router()

/* API #1 : De usuario hacia peliculas*/
ruta.get('/:id', async(req,res) => {

    id = req.params.id;

    let usuario = await db.usuario.findByPk(id)

    if ( usuario ) {
        res.status(200).json(usuario)
    } else {
        res.status(200).send("error")
    }

})


/* API #2 : De peliculas hacia actores*/
ruta.post('/', async(req,res) => {

    let user = req.body
    const usuario = await db.usuario.create(user);

    if ( usuario ) {
        res.status(200).json(usuario)
    } else {
        res.status(200).send("error")
    }
})

module.exports = ruta