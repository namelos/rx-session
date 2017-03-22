const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const config = require('./webpack.config')

let todos = []

const app = express()
const compiler = webpack(config)

app.use(bodyParser.json())

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}))

app.get('/todo', (req, res) => res.send(JSON.stringify(todos)))
app.post('/todo', (req, res) => (todos = req.body, res.send(todos)))

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

app.listen(3000, 'localhost', err => console.log(err || 'Listening at localhost:3000'))
