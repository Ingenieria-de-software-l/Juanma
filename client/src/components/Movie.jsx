import PropTypes from 'prop-types';
import '../style/Movie.css'
import { deleteMovie } from '../api/movies';
import { useEffect } from 'react';

function Movie( movie ) {
  const { name, members, author, description, image, date, myMovies} = movie
  useEffect(() => {
    console.log(movie._id)
  })

  const handleDelete = async () => {
    console.log(movie._id)
    const deletedMovie = await deleteMovie(movie._id)
    if ( deletedMovie ) alert(`La pelidula ${deletedMovie.name} fue eliminada correctamente`)
  }
  
  return (
    <li>
      <header className='btns'>
        <h1>👤{author?.username}</h1>
        {
          myMovies && (
            <div>
              <button className="btn-edit" onClick={handleDelete}>✏️</button>
              <button className="btn-delete" onClick={handleDelete}>-</button>
          </div>
          )
        }
      </header>
      
      <h2>{name}</h2>
      <div>
        <img src={image} alt=""/>
      </div>
      <p>{description}</p>
      <p>Elenco:{members?.join(", ")}</p>
      <p>Fecha de estreno:{date} </p>
    </li>
  )
}

Movie.propTypes = {
  movie: PropTypes.object
};

export default Movie