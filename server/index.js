import express from 'express'
import { PORT } from './config.js'
import MovieRouter from './routes/movie.routes.js'
import UserRouter from './routes/user.routes.js'
import bodyParser from 'body-parser';
import { connectDB } from './db.js'
import cors from 'cors'

const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))


// Usar body-parser para analizar solicitudes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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