import { useEffect, useState } from "react"
import { getMoviesByUser } from "../api/movies"
import { useAuth } from "../context/authContext"
import NavBar from "../components/NavBar"
import Movie from "../components/Movie"
import '../style/MyMovies.css'
import { Link } from "react-router-dom"


function MyMovie() {
  const [ movies, setMovies ] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    handleMovies()
  }, [])

  const handleMovies= async () => {
    const { data } = await getMoviesByUser(user?.id)
    setMovies(data)
  }

  return (
    <>
      <NavBar />
      <main>
        <h1>Movies</h1>
        <div>
          {
            movies.length > 0 ? 
            <ul>
            { movies.map((movie) => (
                <Movie key={movie.id} movie={movie} />
              )) }
          </ul> 
          : <h2>No tienes peliculas</h2>
          }
        </div>
        <Link to={'/createMovie'}><button>+</button></Link>
      </main>
    </>
  )
}

export default MyMovie