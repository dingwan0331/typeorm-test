const express = require('express')
const cors    = require('cors')
const logger  = require('morgan')
const router  = require('./routes')
const { errorLogger, errorResponder } = require('./middlewares/error')

const app = express()

// mysql
const { myDataSource } = require('./config/database/mysql')
myDataSource.initialize().then(() => {
  console.log('Data Source has been initialized!')
})

app.use(cors())
app.use(logger('combined'))
app.use(express.json())
app.use(errorLogger)
app.use(errorResponder)
app.use(router)

module.exports = app
