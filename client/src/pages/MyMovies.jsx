import { useEffect, useState } from "react"
import { getMoviesByUser } from "../api/movies"
import { useAuth } from "../context/authContext"
import NavBar from "../components/NavBar"
import Movie from "../components/Movie"


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
          <ul>
            {movies ? movies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            )) : <h2>No tienes peliculas</h2>}
          </ul>
        </div>
      </main>
    </>
  )
}

export default MyMovie