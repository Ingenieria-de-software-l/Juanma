import PropTypes from 'prop-types';
import '../style/Movie.css'

function Movie( movie ) {
  const { name, members, author, description, image, date, myMovies} = movie
  
  return (
    <li>
      <header className='btns'>
        <h1>👤{author?.username}</h1>
        {
          myMovies && (
            <div>
              <button className="btn-edit">✏️</button>
              <button className="btn-delete">-</button>
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