import { Link } from "react-router-dom"
import '../style/Navbar.css'
import { useAuth } from "../context/authContext"
import { useEffect } from "react"


function NavBar() {

    const { user, signout } = useAuth()

    useEffect(() => {
        console.log(user)
    }, [user])

  return (
    <nav>
        <Link to='/'><span>MovieAPI</span></Link>
        
        <ul>
            { user ? (
                <>
                    <li><Link to={`/movies/${user.username}`}>Mis Peliculas</Link></li>
                    <li onClick={signout}>Logout</li>
                </>
            ) :
            <li><Link to={'/login'}>Login</Link></li> }
        </ul>
    </nav>
  )
}

export default NavBar