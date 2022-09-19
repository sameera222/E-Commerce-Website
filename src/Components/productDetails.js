import {Card,
cardMedia,
cardContent,
cardActions,
Typography,
CardActionArea,
Button,
CardContent,
} from "@material-ui/core"

import {shoppingCart} from "@material-ui/icons";


const ProductDetails = ({product, addProduct = () => {} })=>(
<Card className="custom-card">
    <CardActionArea>
        <cardMedia
        component="img"
        alt="Contemplative Reptile"
        height="360"
        className="card-image"
        image={product.media.image.source}
        title="Contemplative Reptile"
        />
    <CardContent className='content'>
        <Typography className="title" gutterBottom variant="h5"component="h2">
            {product.name}
        </Typography>
    </CardContent>      
    </CardActionArea>

    <cardActions className="actions-content">
    <>
    <Typography className="price" gutterBottom variant="h5" component='h2'>
        {product.price.formatted_with_symbol}
    </Typography>
    <Button
    size="large"
    className="custom-button"
    onClick={()=>{
        addProduct(product.id, 1)
    }}>
  <shoppingCart/>Add to Cart
    </Button>
    </>
    </cardActions>
</Card>
);
export default ProductDetails;



