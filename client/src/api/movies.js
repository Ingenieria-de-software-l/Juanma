import axios from '../api/axios.js'

export const getMovie = id => axios.get(`/getMovie/${id}`)
export const getAllMovies = () => axios.get('/getAllMovies')
export const getMoviesByUser = user => axios.post('/getMoviesByUser', {user})
export const createMovie = movie => axios.post('/createMovie', movie)
export const deleteMovie = id => axios.delete(`/deleteMovie/${id}`)
export const updateMovie = movie => axios.put(`/updateMovie`, movie)