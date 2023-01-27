import { Box, styled } from '@mui/material'
import React from 'react'
import Slide from './Slide'


const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
const Midslide = ({ products, title, timer }) => {
    return (
        <Component>
            <LeftComponent>
                <Slide products={products} title={title} timer={timer} />
            </LeftComponent>
            <RightComponent>
                <img src={adURL} alt="" style={{ width: 217 }} />
            </RightComponent>
        </Component>
    )
}

export default Midslide


const Component = styled(Box)`
    display: flex;

`

const LeftComponent = styled(Box)`
width: 83%;
`

const RightComponent = styled(Box)`
    background-color: #ffffff;
    padding: 3px;
    margin-top: 5px;
    margin-left: 10px;
    width: 17%;
    text-align: center;
`