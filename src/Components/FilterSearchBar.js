import React from "react"
import {useState} from "react"


function FilterSearchBar({products}){
    const[searchTerm, setSearchTerm] = useState("")
   
    if(searchTerm == ""){
        return products;
      }else if(products.title.toLowerCase().includes(searchTerm.toLowerCase())){
          return products;
      }

     return(
        <input type="text" placeholder="Search for products" className="search" onChange={(event)=>{
            setSearchTerm(event.target.value)
         }}/>

 
          
     )

}
export default FilterSearchBar;
