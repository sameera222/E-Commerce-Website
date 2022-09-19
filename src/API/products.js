import axios from "axios"
import { BASE_URL, ENDPOINTS } from "../API/endPoints"

export function fetchAllProducts(){
     //"https://fakestoreapi.com/products"
     return axios.get(" https://fakestoreapi.com/products/");
}


