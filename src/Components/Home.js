import React from 'react'
import { useEffect, useState } from "react"
import Navbar from './Navbar'
import { Grid, Container, Card } from "@material-ui/core";
import Cards from "./Cards"
import MaterialCard from "./MaterialCard"
import { useSelector } from "react-redux"

function Home() {
  const [itemCount, setItemCount] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([])
  const [ratingFilter, setRatingFilter] = useState(0);

  
  const products = useSelector((state) => {
    console.log("products in selector in Home", state.products)
    return state.products

  });


  useEffect(() => {
    const filteredProductList = products.filter((product) => {
      if (product.rating.rate > ratingFilter)
        return true;
      return false;
    });

    setFilteredProducts(filteredProductList);
  }, [ratingFilter, products]);

  return (
    <>
      <div className="search-bar">
        <input onChange={(event) => setRatingFilter(event.target.value)} value={ratingFilter} className="input-field"></input>
      </div>
      <div className="container">

        {filteredProducts?.length === 0 ? (
          <div>No Products Available</div>
        ) :
          (

            filteredProducts.map((product) => {
              return (
                <>
                  <Cards product={product} />
                  {/* <MaterialCard/> */}

                </>

              )
            })
          )}

      </div>
    </>
  )
}
export default Home;






