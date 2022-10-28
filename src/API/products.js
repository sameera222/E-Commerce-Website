import axios from "axios"
import { BASE_URL, ENDPOINTS } from "../API/endPoints"

export function fetchAllProducts(){
     //Products are fetched from fake store API
     //`${BASE_URL}/${ENDPOINTS.allProducts
     return axios.get("https://fakestoreapi.com/products/");
         
}


