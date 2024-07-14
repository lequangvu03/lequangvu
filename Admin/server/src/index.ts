import express, { json } from 'express'
import cors from 'cors'
import 'dotenv/config'
import adminAuthRouter from './routes/admin/admin-auth.routes'
import databaseService from './services/database.services'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import path from 'path'
const PORT = process.env.PORT
const app = express()

// ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Connect to database
databaseService.connect()

app.use(json())
app.use(cors())

// Routes
app.use('/api', adminAuthRouter)

// Default error handler middleware
app.use(defaultErrorHandler)

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`)
})
