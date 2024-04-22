import axios from '../api/axios.js'

export const getAllMovies = () => axios.get('/getAllMovies')
export const getMoviesByUser = user => axios.post('/getMoviesByUser', {user})