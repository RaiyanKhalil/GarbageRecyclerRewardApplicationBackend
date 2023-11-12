require('dotenv').config()
const express = require('express');
// const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

// app.use(cors())

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection;
db.on('error', (erro) => console.log(erro))
db.on('open', (erro) => console.log('Connected to Database'))

app.use(express.json())

const appliances = require('./routes/appliances')
app.use('/appliances', appliances)

app.listen(3000, () => console.log('Server Started'))
