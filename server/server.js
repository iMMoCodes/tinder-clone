import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import cardRoutes from './routes/tinderCards.js'

// APP CONFIG
const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000
// MIDDLEWARES
app.use(express.json())
app.use(cors())

// DB CONFIG
mongoose.connect(process.env.MONGODB_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

// API ENDPOINTS
app.get('/', (req, res) => res.status(200).send('hello world'))

// Routes
app.use('/tinder/cards', cardRoutes)

// LISTENER
app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`))
