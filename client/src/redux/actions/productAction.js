import axios from "axios";
import * as actionTypes from "../constants/productConstant"




const URL = "http://localhost:9000"

export const getProduct = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products`)
        // console.log(data.products);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data.products });
    }
    catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
    }
}



export const getProductDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_REQUEST });
        const { data } = await axios.get(`${URL}/product/${id}`);
        // console.log("This is the data " , data.product);
        dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS, payload: data.product });
    }
    catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_FAIL, payload: error.message });
    }
}