import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// APP CONFIG
const app = express()
dotenv.config()
const PORT = process.env.PORT || 5001
// MIDDLEWARES

// DB CONFIG
mongoose.connect(process.env.MONGODB_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

// API ENDPOINTS
app.get('/', (req, res) => res.status(200).send('hello world'))
// LISTENER
app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`))
