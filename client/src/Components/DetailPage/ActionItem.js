import { Box, Button, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';

const ActionItem = ({ products }) => {
    const [quantity, setQuantity] = useState(0);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = products
    // console.log(id);



    const addToCartItem = () => {
        dispatch(addToCart(id, quantity))
        navigate('/cart') 
    }
    return (
        <Wrapper>
            <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%', }}>
                <Image src={products.detailUrl} alt="product" />
            </Box>
            <StyledBtn onClick={() => addToCartItem()} style={{ marginRight: 10, background: '#ff9f00' }} variant='contained'> <ShoppingCartIcon />Add to cart</StyledBtn>
            <StyledBtn style={{ background: '#fb541b' }} variant='contained'> <FlashOnIcon />Buy Now</StyledBtn>
        </Wrapper>

    )
}

export default ActionItem



// const Wrapper = styled(Box)`
// min-width: 40%;
// padding: 40px 0 0 80px;


// `

const Wrapper = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px'

})


const StyledBtn = styled(Button)(({ theme }) => ({
    width: '48%',
    height: '50px',
    borderRadius: '2px',
    [theme.breakpoints.down('lg')]: {
        width: '44%'
    },
    [theme.breakpoints.down('md')]: {
        width: '48%'
    }
}))