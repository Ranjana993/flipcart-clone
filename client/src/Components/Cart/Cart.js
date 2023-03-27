import { Box, Button, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import Empty from './Empty'
import TotalBalance from './TotalBalance'

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart)
    console.log("cartItems", cartItems.length)
    return (
        <>
            {
                cartItems.length ?
                    <Container container>
                        <LeftContainer item lg={9} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography>My  Cart Items ({cartItems?.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item => (
                                    <CartItem key={item.id} item={item} />
                                ))
                            }
                            <PlaceOrderBtn>
                                <StyledBtn>Place Order</StyledBtn>
                            </PlaceOrderBtn>
                        </LeftContainer>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalBalance cartItems={cartItems} />
                        </Grid>
                    </Container>
                    :
                    <Empty />
            }

        </>
    )
}

export default Cart

const Container = styled(Grid)(({ theme }) => ({
    padding: ' 35px 135px',
    [theme.breakpoints.down('md')]:{
        padding:'15px 0',
    }
}))


const PlaceOrderBtn = styled(Box)`
    padding:16px 22px;
    background-color: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 /10%);
    border-top:1px solid #f0f0f0;
`
const StyledBtn = styled(Button)`
    display: flex;
    margin-left: auto;
    background-color: #fb641b;
    color: #fff;
    width: 250px;
    height:51px;
    border-radius: 2px;

`

const LeftContainer = styled(Grid)(({ theme }) => ({
    paddingRight: '15px',
    [theme.breakpoints.down('sm')]: {
        marginBottom: 13
    }
}))




const Header = styled(Box)`
    padding: 15px 24px ;
background-color: #fff;
`