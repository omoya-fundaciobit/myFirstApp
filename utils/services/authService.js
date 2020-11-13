import APIRequest from '../config/axios.config'

export function login(credentials) {
  return APIRequest.post('/login', credentials)
}
