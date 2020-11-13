import axios from 'axios'

export default axios.create({
  baseURL: 'https://reqres.in/api',
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  timeout: 1000,
  timeoutErrorMessage: 'Timeout HTTP Response',
})
