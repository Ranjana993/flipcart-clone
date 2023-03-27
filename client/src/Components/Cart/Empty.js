import { Box, styled, Typography } from '@mui/material'
import React from 'react'

const Empty = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    return (
        <Conatiner>
            <Componennt>
                <img src={imgurl} alt="" style={{width:'15%'}} />
                <Typography>Your Cart is Empty  </Typography>
                <Typography>Add items to it now</Typography>
            </Componennt>
        </Conatiner>
    )
}

export default Empty

const Conatiner = styled(Box)`
height: 80vh;
width: 80%;
background-color:#fff;
margin: 80px 140px ;



`
const Componennt = styled(Box)`
text-align: center;
padding-top: 70px;


`
