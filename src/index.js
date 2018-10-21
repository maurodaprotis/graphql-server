require('dotenv').config({ path: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev' })
const createServer = require('./createServer')

const server = createServer()

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTED_URL
  }
}, deets => {
  console.log(`🚀 Server is now running on ${process.env.API_ENDPOINT}`)
})
