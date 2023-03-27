import {  Grid, styled } from '@mui/material';
import React from 'react'
import { imageURL } from '../../Contants/data';

const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';



const MidBanner = () => {
    return (
        <>
            <Wrapper container lg={12} md={12} xs={12} >
                {
                    imageURL.map(data => {
                        return (
                            <Grid item key={data.id} lg={4} sm={12} md={4} xs={12} >
                                <img src={data} alt="" style={{ width: '100%' }} />
                            </Grid>
                        )
                    })
                }
            </Wrapper>
            <Image src={url} alt="" />
        </>
    )
}

export default MidBanner

const Wrapper = styled(Grid)`
    margin-top: 10px;
    justify-content: space-between;
`

const Image = styled('img')(({ theme }) => ({
    marginTop: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height:'120px'
    }
}))