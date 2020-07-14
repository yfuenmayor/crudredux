import axios from 'axios';

const clienteAxios = axios.create({
    // baseURL: 'http://localhost:4000'
    baseURL: 'https://my-json-server.typicode.com/yfuenmayor/jsonServer'
});

export default clienteAxios;