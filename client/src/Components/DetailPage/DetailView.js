import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../redux/actions/productAction'
import { Box, Grid, styled, Typography } from "@mui/material"
import ActionItem from './ActionItem'



const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

const DetailView = () => {
    const dispatch = useDispatch();
    const { id } = useParams()

    const products = useSelector(state => state.getProductDetail.product)
    // console.log(product.product)
    // const { url} = products
    console.log(products);
    console.log("product is ", products?.url)

    useEffect(() => {
        dispatch(getProductDetail(id))
    }, [dispatch, id])
    // console.log(product);



    return (
        <Component>
            {
                !products && <h1>LOADING......</h1>
            }

            {
                products && Object.keys(products).length &&
                <Container container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem products={products} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <Typography>{products.title.longTitle}</Typography>
                        <Typography style={{ color: '#878787', marginTop: 5, fontSize: 14 }}>8 Ratings & 1 Reviews
                            <Box component='span'><img src={fassured} style={{ width: 77, marginLeft: 20 }} alt="" /></Box>
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{products.price.cost}</span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#878787' }}><strike>₹{products.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{products.price.discount} off</span>
                        </Typography>
                    </RightContainer>
                </Container>
            }
        </Component>
    )
}

export default DetailView


const Component = styled(Box)`
    background:  #f2f2f2f2;
    margin-top: 55px;

`

const Container = styled(Grid)`
    display: flex;
    background-color: #ffffff;

`
const RightContainer = styled(Grid)`
    margin-top:50px

`

