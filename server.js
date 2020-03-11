require('dotenv').config()

const express = require('express')
const path = require('path')
const { join } = require('path')
const app = express()

app.engine('jsx', require('express-react-views').createEngine())
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.get('/',(req,res) => {
    res.render('home')
})
app.listen(process.env.PORT || 3000)