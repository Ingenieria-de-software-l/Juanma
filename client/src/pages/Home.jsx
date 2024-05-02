import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import Movie from "../components/Movie"
import { getAllMovies } from "../api/movies"


function Home() {
  const [ movies, setMovies ] = useState([])

  useEffect(() => {
    handleSetMovies()
  }, [])

  const handleSetMovies = async () => {
    const { data } = await getAllMovies()
    console.log(data)
    setMovies(data)
  }

  return (
    <>
      <NavBar />
      <main>
        <h1>Movies</h1>
        <div>
          <ul>
            {movies.length>0 ? movies.map((movie) => (
              <Movie key={movie._id} name={movie.name} />
            )) : <p>No hay peliculas aún</p>}
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home