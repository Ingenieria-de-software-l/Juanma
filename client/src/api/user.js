import axios from './axios.js'

export const login = user => axios.post('/login', user)
export const register = user => axios.post('/createUser', user)
export const logout = () => axios.get('/logout')
export const verifyToken = token => axios.post('/verify', {token})