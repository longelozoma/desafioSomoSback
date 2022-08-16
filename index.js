const express = require('express')

const app = express()

const porta = 3000

const mongoose = require('mongoose')

const registro = require('modelo/jogo')

app.use(express.json())

app.post('/registro', function (req, res) {
  let cadastro = new registro(req.body)

  cadastro.save(function (erro, certo) {
    if (erro) {
      res.send({ erro: 'Carta ja existe' })
    } else {
      res.status(201).json({ certo })
    }
  })
})

app.get('/registro', async function (req, res) {
  try {
    const todosRegistros = await registro.find()

    return res.status(200).send({ todosRegistros })
  } catch (erro) {
    return reportError.status(404).send({ erro })
  }
})

app.put('/registro/:id', function (req, res) {
  registro.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
  if (erro) {
    res.json({ message: 'Não foi possive atualizar' })
  } else {
    res.json({ message: 'Registro atualizado' })
  }
})

mongoose
  .connect('mongodb://localhost:27017/jogo')
  .then(function () {
    app.listen(porta, function () {
      console.log('App rodando no url https://localhost:3000/registro')
    })
    console.log('conectando na rede')
  })
  .catch(function (erro) {
    console.log('falha ao conectar: ${erro}')
  })
