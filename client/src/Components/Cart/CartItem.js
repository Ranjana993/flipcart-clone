import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/actions/cartAction'
import { addElipses } from '../../utlis/Commonutlis'
import ButtongGrp from './ButtongGrp'



const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    // console.log(item)

    const removeItemfromCart = (id)=>{
        console.log("hellooo from removing");
        dispatch(removeFromCart(id))
        console.log("hellooo from removing");
    }
    return (
        <Container>
            <LeftComponent>
                <img src={item.product.url} style={{ width: 110, height: 110 }} alt="" />
                <ButtongGrp />
            </LeftComponent>
            <Box style={{ margin: 20 }}>
                <Typography>{addElipses(item.product.title.longTitle)}</Typography>
                <SmallText >Seller :RetailNet
                    <Box component={'span'}><img src={fassured} alt="" style={{ width: 50, marginLeft: 10 }} /></Box>
                </SmallText>
                <Typography style={{ margin: '20px 0' }}>
                    <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>₹{item.product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#878787' }}><strike>₹{item.product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#388E3C' }}>{item.product.price.discount} off</Box>
                </Typography>
                <Remove onClick={() => removeItemfromCart(item.product.id)}>REMOVE</Remove>

            </Box>
        </Container>
    )
}

export default CartItem


const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color:#000;
    font-weight: 600;

`

const Container = styled(Box)`
    border-top: 1px solid #f0f0f0f0;
    display: flex;
    background-color: #fff;
`

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;

`

const LeftComponent = styled(Box)`
display: flex;
flex-direction: column;
margin: 20px;
`