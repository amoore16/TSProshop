import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db'

dotenv.config()
connectDB()

const app = express()
const port = process.env.PORT || 5000
const mode = process.env.MODE || 'dev'

app.get('/', (req, res) => {
    res.send('API is running...')
})


app.listen(port, () => {
    try {
        console.log('Express server running on port ', port)
    } catch (error) {
        console.log('express error: ', error)
    }
})

