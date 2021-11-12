//Mise en place du serveur Express
require("dotenv").config()
const express = require('express')
// connexion à la DB
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')

connectDB()

const app = express()

//utilisation de data en json
app.use(express.json())

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))