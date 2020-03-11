require('dotenv').config()

const express = require('express')
const path = require('path')
const { join } = require('path')
const app = express()
const Burger = require('./models/burger.js')

app.engine('jsx', require('express-react-views').createEngine())
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.get('/',(req,res) => {
    // Burger.destroy({ Remove all items
    //     where: {}
    // })
    Burger.findAll()
    .then(burgers =>{
        res.render('home', {burgers: JSON.parse(JSON.stringify(burgers))})
    })
})
app.put('/burger',  (req, res) => {
    Burger.update({wasEaten: req.body.wasEaten}, {where: {id: req.body.id}})
    .then(res.sendStatus(200))
})
app.post('/burger', (req,res) => {
    Burger.create(req.body)
    .then(() => {res.sendStatus(200)})
})
require('./config').sync()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch((e) => console.log(e))