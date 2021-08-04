const express = require('express')
const app = express()
const port = 8000
const pokemove = require('./private/asyncPokeMove.js')

app.get('/:pokemon/:move', (req, res) => {
    let pokemon = req.params.pokemon;
    let move = req.params.move;
    res.send(pokemove.check(pokemon, move))
})

app.listen(port, () => console.log('Server Started'))
