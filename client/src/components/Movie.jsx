import { useEffect } from "react"
import PropTypes from 'prop-types';

function Movie( name) {
  // const { members, author, description, image, date} = movie
  // useEffect(() => {
  //   console.log(movie)
  // })
  return (
    <li>
      <h2>Titulo:{name}</h2>
      {/* <div>
        <img src={image} alt=""/>
      </div>
      <p>{description}</p>
      <p>Elenco:{members?.join(", ")}</p>
      <p>Fecha de estreno:{date}</p>
      <p>Publicado por:{author?.username}</p> */}
    </li>
  )
}

Movie.propTypes = {
  name: PropTypes.string
};

export default Movie