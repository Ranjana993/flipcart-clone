import { Box, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const TotalBalance = ({ cartItems }) => {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0)

    useEffect(() => {
        totalAmount();
    }, [cartItems]);

    const totalAmount = () => {
        let price = 0, discount = 0;
        cartItems.map((item) => {
            price = price + item.product.price.mrp
            discount = discount + (item.product.price.mrp - item.product.price.cost)
        })
        // cartItems.map(item => {
        //     price += item.price.mrp
        //     discount += (item.price.mrp - item.price.cost)
        // })
        setPrice(price);
        setDiscount(discount);
    }



    return (
        <Box>
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>Price ({cartItems?.lenght} item)
                    <Prize component={'span'}> ₹{price}</Prize>
                </Typography>
                <Typography>Discount ({cartItems?.lenght} item)
                    <Prize component={'span'}> -₹{discount}</Prize>
                </Typography>
                <Typography>Delivery Charge ({cartItems?.lenght} item)
                    <Prize component={'span'}> ₹40</Prize>
                </Typography>
                <Typography variant='h6'>Total Amount ({cartItems?.lenght} item)
                    <Prize component={'span'}> ₹{price-discount+40}</Prize>
                </Typography>
                <Discount>You will save ₹{discount-40} on fisrt order </Discount>
            </Container>
        </Box>
    )
}

export default TotalBalance

const Header = styled(Box)`
    padding: 16px 24px;
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;

`

const Heading = styled(Typography)`
    color:#878787


`

const Container = styled(Box)`

padding: 15px 24px;
background-color: #fff;
& > p {
    margin-bottom: 20px;
    font-size: 14px;
}
& > h6 {
    margin-bottom: 20px;
}
`

const Discount = styled(Typography)`
color: green;
font-weight: 500;

`
const Prize = styled(Box)`
float:right;
`