// import {Card,
// cardMedia,
// cardContent,
// cardActions,
// Typography,
// CardActionArea,
// Button,
// CardContent,
// } from "@material-ui/core"

// import {shoppingCart} from "@material-ui/icons";


// const ProductDetails = ({product, addProduct = () => {} })=>(
// <Card className="custom-card">
//     <CardActionArea>
//         <cardMedia
//         component="img"
//         alt="Contemplative Reptile"
//         height="360"
//         className="card-image"
//         image={product.media.image.source}
//         title="Contemplative Reptile"
//         />
//     <CardContent className='content'>
//         <Typography className="title" gutterBottom variant="h5"component="h2">
//             {product.name}
//         </Typography>
//     </CardContent>      
//     </CardActionArea>

//     <cardActions className="actions-content">
//     <>
//     <Typography className="price" gutterBottom variant="h5" component='h2'>
//         {product.price.formatted_with_symbol}
//     </Typography>
//     <Button
//     size="large"
//     className="custom-button"
//     onClick={()=>{
//         addProduct(product.id, 1)
//     }}>
//   <shoppingCart/>Add to Cart
//     </Button>
//     </>
//     </cardActions>
// </Card>
// );
// export default ProductDetails;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../Redux/ProductAction";
import { addToCart } from "../Redux/ProductAction";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();
  const handleClick = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      let response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );

      setProduct(response.data);
      // dispatch(selectedProduct(response));
    };

    fetchProductDetails();
  }, []);

  return (
    <div className="product-details">
      <div className="right-side">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="left-side">
        <h4>{product.category}</h4>
        <h1>{product.title}</h1>
        <p>
          Rating {product.rating && product.rating.rate}{" "}
          <i className="fa fa-star"></i>
        </p>
        <h3>Rs {product.price}</h3>
        <p>{product.description}</p>
        <button
          className="btn"
          onClick={() => {
            handleClick(product);
          }}
        >
          Add to Cart
        </button>
        <Link to={"/cart"}>Go to cart</Link>
      </div>
    </div>
  );
};

export default ProductDetails;



