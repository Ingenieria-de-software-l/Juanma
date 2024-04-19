import axios from 'axios'

export const login = user => axios.post('/api/login', user)
export const register = user => axios.post('/api/createUser', user)
export const logout = () => axios.get('/api/logout')
export const verifyToken = token => axios.post('/api/verify', {token})