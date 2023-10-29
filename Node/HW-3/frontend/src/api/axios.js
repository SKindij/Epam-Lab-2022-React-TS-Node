// api/axios.js
// використовується для взаємодії з віддаленим сервером
import axios from 'axios'

// інстанс для здійснення HTTP-запитів до сервера
export default axios.create({
  // базова URL-адресу сервера
  baseURL: 'http://localhost:8080'
})

/*
  У додатку можна використовувати цей інстанс Axios 
  для взаємодії із вказаним сервером. 
  Не потрібно вказувати базовий URL в кожному окремому запиті.
*/
