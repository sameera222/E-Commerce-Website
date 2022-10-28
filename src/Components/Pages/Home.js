import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { addToCart } from "../Redux/ProductAction";
import Navbar from './Navbar';
import Cards from "./Cards";
import "./Home.css";
import MaterialCard from "../MaterialCard";


const Home = () => {
    const [filteredProducts, setFilter] = useState('');
    const [searchInput, setSearchInput] = useState("");
    const [filterCriteria, setfilterCriteria] = useState("");
    const dispatch = useDispatch();

    const products = useSelector((state) => {
      return state.products;
      console.log(products)
    });

  const filterProducts = (category) => {
    const updateProducts = products.filter((item) => {
      if (item.category === category) {
        return item;
      }
    });
    setFilter(updateProducts);
  };

  useEffect(() => {
    if (filterCriteria === "") {
      setFilter(products);
      return;
    }
    let updatedProducts = products.filter((product) =>
      product.title.toLowerCase().includes(filterCriteria.trim().toLowerCase())
    );
    setFilter(updatedProducts);
  }, [products, filterCriteria]);

  return (
    <>
     <div className="main-container">
        <div className="categories">
          <button
            className="btn"
            onClick={() => {
              setFilter(products);
            }}
          >
            All
          </button>
          <button
            className="btn"
            onClick={() => {
              filterProducts("men's clothing");
            }}
          >
            Men's Clothing
          </button>
          <button
            className="btn"
            onClick={() => {
              filterProducts("women's clothing");
            }}
          >
            Women's Clothing
          </button>
          <button
            className="btn"
            onClick={() => {
              filterProducts("jewelery");
            }}
          >
            Jewellery
          </button>
          <button
            className="btn"
            onClick={() => {
              filterProducts("electronics");
            }}
          >
            Electronics
          </button>
        </div>
       <div className="search-bar">
        <input 
         type="search"
        onChange={(event) => {
          setSearchInput(event.target.value)
          if(event.target.value === "") {
            setfilterCriteria("")
          }
        }}
          value={searchInput} 
          className="input-field"/>

           <button
            className="btn"
            onClick={() => {
              setfilterCriteria(searchInput);
            }}
          >
            Search
          </button>
       </div>
  </div>
      <div className="product-container">
             {filteredProducts?.length === 0 ? (
                   <div className = "product-available" >No Products Available</div>
              ) :
               (
              filteredProducts.map((product) => {
                return (
                  <>
                  <div className="box">
                    <div className="content">
                         <div key={product.id} className="card">
                            <Link
                              to={`/product/${product.id}`}
                              style={{ textDecoration: "none" }}
                             >
                            <img src={product.image} alt="" className="product_image" />
                            {/* <h3>{product.title.substring(0, 12)}</h3> */}
                            <p className="price">Rs:-{product.price}</p>
                            <p className="price">{product.title}</p>
                            </Link>
                            <button
                              className="add-to-cart"
                              onClick={() => {
                              dispatch(addToCart(product));
                            }}
                            >
                              Add to Cart
                            </button>
                       </div>
                 </div>
          </div>
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






