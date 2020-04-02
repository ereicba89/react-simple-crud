//para tener una configuracion de axios

import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: 'http://localhost:4000'
})

export default clienteAxios;