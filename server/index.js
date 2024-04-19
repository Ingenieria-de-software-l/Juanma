import express from 'express'
import { PORT } from './config.js'
import MovieRouter from './routes/movie.routes.js'
import UserRouter from './routes/user.routes.js'
import { connectDB } from './db.js'

const app = express()

//routes
app.use('/api', MovieRouter)
app.use('/api', UserRouter)


async function main(){
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