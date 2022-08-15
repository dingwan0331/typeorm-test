import express from 'express'
import cors    from 'cors'
import logger  from 'morgan'
import router  from './routes/index.js'
import { errorLogger, errorResponder } from './middlewares/error.js'

const app = express()

// mysql
import myDataSource from './config/database/mysql.js'
myDataSource.initialize().then(() => {
  console.log('Data Source has been initialized!')
})

app.use(cors())
app.use(logger('combined'))
app.use(express.json())
app.use(errorLogger)
app.use(errorResponder)
app.use(router)

export default app
