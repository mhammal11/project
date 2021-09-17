import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onRemoveFromCart }) => {
  const classes = useStyles();

  return (
    <Card className="cart-item">
      <CardMedia image={item.primary_image.url_standard} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" color="primary">{item.name}</Typography>
        <Typography variant="h6" color="secondary">${item.price}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions} >
        <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item)}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;