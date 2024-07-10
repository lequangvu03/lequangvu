import express, { json, Request, Response } from 'express'
import cors from 'cors'
import 'dotenv/config'
import userRouter from './routes/user.routes'
import databaseService from './services/database.services'
import { defaultErrorHandler } from './middlewares/error.middlewares'
const PORT = process.env.PORT

const app = express()
databaseService.connect()

app.use(json())
app.use(cors())

app.use('/api', userRouter)

app.use(defaultErrorHandler)
app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`)
})
