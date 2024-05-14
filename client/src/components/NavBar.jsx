import { Link } from "react-router-dom"
import '../style/Navbar.css'
import { useAuth } from "../context/authContext"


function NavBar() {

    const { user } = useAuth()

  return (
    <nav>
        <Link to='/'><span>MovieAPI</span></Link>
        
        <ul>
            { user ? (
                <>
                    <li><Link to={`/movies/${user.username}`}>Mis Peliculas</Link></li>
                    <li><Link to={'/'}>Logout</Link></li>
                </>
            ) :
            <li><Link to={'/login'}>Login</Link></li> }
        </ul>
    </nav>
  )
}

export default NavBar