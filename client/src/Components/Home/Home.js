import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box, styled } from '@mui/material'
import { getProduct } from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Slide from './Slide'
import Midslide from "./Midslide"
import MidBanner from './MidBanner'

const Home = () => {
    const { products } = useSelector(state => state.getProducts)
    const dispatch = useDispatch()

    console.log(products);
    useEffect(() => {
        dispatch(getProduct())



    }, [dispatch])




    return (
        <>
            <Navbar />
            <Container>
                <Banner />
                <Midslide products={products} title={"Deal of the Day"} timer={true} />
                <MidBanner/>
                <Slide products={products} title={"Discount For You"} timer={false} />
                <Slide products={products} title={"Suggestions for you"} timer={false} />
                <Slide products={products} title={"Top Selection"} timer={false} />
                <Slide products={products} title={"Trendings Offer"} timer={false} />
                <Slide products={products} title={"Recemendatation items"} timer={false} />
                <Slide products={products} title={"Trendings Offers"} timer={false} />
                <Slide products={products} title={"Top Deals on Accessories"} timer={false} />
            </Container>
        </>
    )
}

export default Home

const Container = styled(Box)`
background: #f2f2f2;
padding: 10px;
`