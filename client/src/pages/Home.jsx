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
    setMovies(data)
  }

  return (
    <>
      <NavBar />
      <main>
        <h1>Movies</h1>
        <div>
          <ul>
            {movies?.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home