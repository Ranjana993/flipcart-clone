import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../redux/actions/productAction'
import { Box, Grid, styled } from "@mui/material"
import ActionItem from './ActionItem'
import ProductDetail from './ProductDetail';



const DetailView = () => {
    const dispatch = useDispatch();
    const { id } = useParams()

    const products = useSelector(state => state.getProductDetail.product)
    // console.log(product.product)
    // const { url} = products
    // console.log(products);
    // console.log("product is ", products?.url)

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
                        <ProductDetail products={products} />
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

const Container = styled(Grid)(({ theme }) => ({
    display: 'flex',
    background: '#ffffff',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))




const RightContainer = styled(Grid)`
    margin-top:50px

`

