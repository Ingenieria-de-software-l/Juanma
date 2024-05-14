import PropTypes from 'prop-types';

function Movie( movie) {
  const { name, members, author, description, image, date} = movie
  
  return (
    <li>
      <h1>Publicado por:{author?.username}</h1>
      <h2>Titulo:{name}</h2>
      <div>
        <img src={image} alt=""/>
      </div>
      <p>{description}</p>
      <p>Elenco:{members?.join(", ")}</p>
      <p>Fecha de estreno:{date}</p>
    </li>
  )
}

Movie.propTypes = {
  movie: PropTypes.object
};

export default Movie