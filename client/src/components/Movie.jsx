import PropTypes from 'prop-types';

function Movie(movie) {
  const {name, members, author, description, image, date} = movie
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <img src={image} alt=""/>
      </div>
      <p>{description}</p>
      <p>Elenco:{members.join(", ")}</p>
      <p>Fecha de estreno:{date}</p>
      <p>Publicado por:{author}</p>
    </div>
  )
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Movie