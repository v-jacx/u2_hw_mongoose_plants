const express = require('express');
const routes = require('./routes');
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')

const PORT = process.env.PORT || 3001

const app = express()

app.use(logger('dev'))
app.use(express.json())


app.use('/api', routes);

db.on('error', console.error.bind(console.Console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))