import express from 'express'
import cors from 'cors'
import constants from './config/constants.js'
import ApiRouter from './routes/routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.disable('x-powered-by')

app.use('/api', ApiRouter)

const port = constants.server.port

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})