import React from 'react';
import clsx from 'clsx';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Collapse } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



import useStyles from './styles';

const Product = ({ product, onAddtoCart, onRemoveFromCart }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    console.log(product)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const onChangeValue = (event) => {
        const listen = true;
        console.log(event.target.value);
      }

    return (
        <Card className={classes.root} >
            <CardMedia className={classes.media} image={product.primary_image.url_standard} title={product.name} onClick={handleExpandClick}/>
            <CardContent onClick={handleExpandClick}>
                <div className={classes.cardContent}>
                    <Typography variant="h5"  color="primary" justify="flex-start" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h6" color="secondary">
                        <div >${product.price}</div>
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{product.meta_description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={() => onAddtoCart(product)}>
                    <AddShoppingCart />
                </IconButton>
                <Typography fontFamily="inherit">
                <div onChange={onChangeValue}>
                <label >
                    <input type="radio" value={product.modifiers[1].option_values[0].label} name="Delivery Frequency" required /> {product.modifiers[1].option_values[0].label}
                </label>
                <label >
                    <input type="radio" value={product.modifiers[1].option_values[1].label} name="Delivery Frequency" /> {product.modifiers[1].option_values[1].label}
                </label>
                </div>
                </Typography>
                <IconButton
                    className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
            >
          <ExpandMoreIcon />
        </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary"/>
        </CardContent>
      </Collapse>
        </Card>
    )
}

export default Product
