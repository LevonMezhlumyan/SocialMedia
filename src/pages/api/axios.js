import axios from 'axios'
import { BASE_URL } from './consts'

const user = localStorage.getItem('user')  && JSON.parse(localStorage.getItem('user'))

export const makeRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization:`Bearer ${user?.token}`
    }
})