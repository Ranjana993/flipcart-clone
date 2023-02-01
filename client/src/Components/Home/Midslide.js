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
                <img src={adURL} alt="ad" style={{ width: 217 }} />
            </RightComponent>
        </Component>
    )
}

export default Midslide


const Component = styled(Box)`
    display: flex;

`

const LeftComponent = styled(Box)(({ theme }) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))



const RightComponent = styled(Box)(({ theme }) => (
    {
        background: '#ffffff',
        padding: 3,
        marginTop: 5,
        marginLeft: 10,
        width: '17%',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }
))


