import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import Movie from "../components/Movie"
import { getAllMovies } from "../api/movies"
import '../style/Home.css'


function Home() {
  const [ movies, setMovies ] = useState([])

  useEffect(() => {
    handleSetMovies()
  }, [])

  const handleSetMovies = async () => {
    const { data } = await getAllMovies()
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
              <Movie key={movie._id} {...movie} />
            )) : <p>No hay peliculas aún</p>}
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home