import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../redux/actions/productAction'
import { Box, Typography } from "@mui/material"


const DetailView = () => {
    const dispatch = useDispatch();
    const { id } = useParams()

    const products = useSelector(state => state.getProductDetail.product)
    // console.log(product.product)
    // const { url} = products
    console.log(products);
    console.log("product is ", products?.url)
    // console.log("hello", product?.id)

    useEffect(() => {
        // if (product && id !== product.id) {
        //     dispatch(getProductDetail(id))
        // }
        dispatch(getProductDetail(id))
    }, [dispatch, id])
    // console.log(product);



    return (
        <Box>
            <h2>hello</h2>
            {
                products && Object.keys(products).length &&
                <Box>
                    <Box>

                    </Box>
                    <Box>
                        <img src={products.detailUrl} alt="" />
                        <Typography>{products.title.longTitle}</Typography>
                    </Box>
                </Box>
            }
        </Box>
    )
}

export default DetailView