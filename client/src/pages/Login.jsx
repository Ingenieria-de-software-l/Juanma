import { useEffect, useState } from "react";
import { useAuth } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [ username, setUSername ] = useState('');
    const [ password, setPassword ] = useState('');
    const { signin, isAuthenticated } = useAuth()
    const navigate = useNavigate()


    useEffect(() => {
        if (isAuthenticated) navigate('/')        
    }, [isAuthenticated])

    const handleLogin = (e) => {
        e.preventDefault();
        signin({username, password});
    }

    return (
      <form>
        <label>
          Username:
          <input type="text" name="username" placeholder="Username" value={username} onChange={e => setUSername(e.target.value)}/>
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <Link to={'/register'}><h4>¿No tienes una cuenta? Registrate</h4></Link>
        <input type="submit" value="Login" onSubmit={handleLogin}/>
      </form>
    )
  }
  
  export default Login