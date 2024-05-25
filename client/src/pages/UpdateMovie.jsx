import { useEffect, useState } from 'react'
import { updateMovie, getMovie } from "../api/movies"
import { useAuth } from "../context/authContext"
import { useNavigate, useParams } from 'react-router-dom'
import '../style/CreateMovie.css'

function MovieForm() {
    const { id } = useParams()
    const { user } = useAuth()
    const [ movie, setMovie ] = useState({})
    const navigate = useNavigate()

    const handleGetMovie = async () => {
        const response = await getMovie(id)
        setMovie(response.data)
    }

    useEffect(() => {
        handleGetMovie()
        console.log(movie)
    }, [])

    const handleImage = e => {
        const file = e.target.files[0]
        navigate
        const types = ['image/png', 'image/jpeg', 'image/jpg']
        if( types.includes( file.type )) {
            const reader = new FileReader()
            reader.onload = () => {
                setMovie({...movie, image: reader.result})
            }
            reader.readAsDataURL(file)
        }else{
            alert('El archivo no es una imagen')
            setMovie({...movie, image: null})
            return
        }
    }

    const handleSubmit = async e => {
        try{
            e.preventDefault()
            setMovie({...movie, members: movie.members.split(',')})
            console.log(movie)
            const movieCreated = await updateMovie({...movie, author: user.id, id})
            console.log(movieCreated)

            if(movieCreated) {
                alert('Pelicula ediata con exito')
                setMovie({name: '', description: '', date: null, image: null, members: ''})
                navigate(`/movies/${user.username}`)    
            }
        }catch(error){
            console.log(error)
        }

    }

  return (
    <>
        <h1>Crear Pelicula</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Titulo' value={movie.name} onChange={e => setMovie({...movie, name: e.target.value})}/>
            <textarea placeholder="Descripción" value={movie.description} onChange={e => setMovie({...movie, description: e.target.value})}></textarea>
            <textarea placeholder="Miembros" value={movie.members} onChange={e => setMovie({...movie, members: e.target.value})}></textarea>
            <label>
                Fecha de publicacion
                <input type="date" value={movie.date} onChange={e => setMovie({...movie, date: e.target.value})}/>
            </label>
            <label>
                image
                <input type="file" placeholder="poster" onChange={handleImage}/>
            </label>
            <img src={movie.image} />
            <input type="submit" value="Editar Pelicula"/>
        </form>
    </>
  )
}

export default MovieForm