import React from 'react';
import "./style.css"


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MaterialCard({products}) {
const {id,title,description,brand,price,category,image} = products
  return (
    <Card  sx={{ maxWidth: 345, }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
     <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title} Catogory-: {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{brand}</Button>
        <Button size="small">{price}</Button>
      </CardActions>
    </Card>
  )
}

export default MaterialCard;
