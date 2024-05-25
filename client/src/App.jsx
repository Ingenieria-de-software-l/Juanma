import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import { AuthProvider } from './context/authContext'
import Register from './pages/Register'
import MyMovies from './pages/MyMovies'
import CreateMovie from './pages/CreateMovie'
import UpdateMovie from './pages/UpdateMovie'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/createMovie' element={<CreateMovie />} ></Route>
          <Route path='/updateMovie/:id' element={<UpdateMovie />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/register' element={<Register />} ></Route>
          <Route path='/movies/:user' element={<MyMovies />} ></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
