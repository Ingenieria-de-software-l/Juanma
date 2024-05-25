import { useEffect, useState } from "react";
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import '../style/Login.css'

function Register() {
    const [ username, setUSername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { signup, isAuthenticated,  } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate('/')        
    }, [isAuthenticated])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username)
        signup({username, email, password});
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-form">
        <label>
          Username:
          <input type="text" name="username" placeholder="Username" value={username} onChange={e => setUSername(e.target.value)}/>
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          Password:
          <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <input type="submit" value="Register"  />
      </div>
    </form>
  )
}

export default Register