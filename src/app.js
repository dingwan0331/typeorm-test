import express from 'express'
import cors    from 'cors'
import logger  from 'morgan'
import router  from './routes/index.js'
import { errorLogger, errorResponder } from './middlewares/error.js'
import sequelize from './config/database/mysql.js'

const app = express()

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use(cors())
app.use(logger('combined'))
app.use(express.json())
app.use(errorLogger)
app.use(errorResponder)
app.use(router)

export default app
