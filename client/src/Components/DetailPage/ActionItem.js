import { Box, Button, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import React from 'react'

const ActionItem = ({ products }) => {
    return (
        <Wrapper>
            <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%', }}>
                <Image src={products.detailUrl} alt="product" />
            </Box>
            <StyledBtn style={{ marginRight: 10, background: '#ff9f00' }} variant='contained'> <ShoppingCartIcon />Add to cart</StyledBtn>
            <StyledBtn style={{ background: '#fb541b' }} variant='contained'> <FlashOnIcon />Buy Now</StyledBtn>
        </Wrapper>

    )
}

export default ActionItem



const Wrapper = styled(Box)`
min-width: 40%;
padding: 40px 0 0 80px;


`

const Image = styled('img')({
    
    padding:'15px'

})


const StyledBtn = styled(Button)`
width: 48%;
height: 50px;
border-radius: 2px;
`