import express from 'express'
import { PORT } from './config'
import MovieRouter from 'routes/movie.routes.js'
import { connectDB } from './db'

const app = express()

//routes
epp.use('/api', MovieRouter)


async function MediaDeviceInfo(){
    try{
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Aplicacion en http://localhost:${PORT}`)
        })
    }catch(error){
        console.log(error);
    }
}

main()