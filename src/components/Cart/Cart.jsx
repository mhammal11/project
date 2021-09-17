import React from 'react'
import { Container, Typography, Button, Grid, CssBaseline } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, total, onRemoveFromCart, onEmptyCart }) => {
    const isEmpty = !cart.length;
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart,
            <Link to="/" className={classes.link}> start adding some</Link>!
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={0} padding="50%" justifyContent="space-evenly">
                {cart.map((el) => (
                    <Grid xs={12} sm={4} key={el.id} >
                        <CartItem item={el} onRemoveFromCart={onRemoveFromCart} />
                    </Grid>
    ))};
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: ${total}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary"  onClick={() => onEmptyCart()}>Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    )

    return (
        <Container>
            <CssBaseline />
            <div className={classes.toolbar} />
            <Typography className={classes.title} gutterBottom variant="h3" align="center">Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
