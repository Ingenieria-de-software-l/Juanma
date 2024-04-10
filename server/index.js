import express from 'express'
import { PORT } from './config'
import MovieRouter from 'routes/movie.routes.js'

const app = express()

//routes
epp.use('/api', MovieRouter)

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})