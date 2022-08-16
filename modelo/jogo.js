const mongoose = require('mongoose')
const esquema = mongoose.Schema

const jogo = new esquema({
  name: 'balbasaur',
  attributes: {
    hp: 45,
    attack: 49,
    defense: 49,
    'special-attack': 65,
    'special-defense': 65,
    speed: 45,
  },
})
