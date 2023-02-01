import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../redux/actions/productAction'
import { Box, Typography } from "@mui/material"


const DetailView = () => {
    const dispatch = useDispatch();
    const { id } = useParams()

    const product = useSelector(state => state.getProductDetail)
    console.log("hello", product)
    // console.log("loading ..... ", loading, product);

    useEffect(() => {
        // if (product && id !== product.id) {
        //     dispatch(getProductDetail(id))
        // }
        dispatch(getProductDetail(id))
    }, [dispatch, id])
    // console.log(product);



    return (
        <Box>
            {/* <h2>hello</h2> */}
            {/* {
                product && Object.keys(product).length &&
                <Box>
                    <Box>

                    </Box>
                    <Box>
                        <Typography>{product.title.longTitle}</Typography>
                    </Box>
                </Box>
            } */}
        </Box>
    )
}

export default DetailView