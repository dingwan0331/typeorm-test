import http   from 'http'
import dotenv from 'dotenv'
import app    from './app.js'

dotenv.config()

const PORT   = process.env.SERVER_PORT || 8000
const server = http.createServer(app)

const serverStart = () => {
  try {
    server.listen(PORT, () => {
      console.log(`listening on ${PORT}!`)
    })
  } catch (err) {
    console.error(err)
  }
}

serverStart()
