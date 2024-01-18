import axios from "axios"

let baseUrl="http://localhost:5000/"
export const getAllToys = () => {
   return axios.get(`${baseUrl}toys`)
}

export const deletedToy = (toyId) => {
   return axios.delete(`${baseUrl}toys/${toyId}`)
}

