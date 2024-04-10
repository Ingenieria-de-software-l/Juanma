import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Moviie from './pages/Movie'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/movie/:id' element={<Moviie />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
