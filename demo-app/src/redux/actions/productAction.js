import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_FAILURE } from "../constants/productConstant";
import axios from "axios";


export const fetchProducts=()=>async(dispatch)=>{
    try{
        dispatch({type:FETCH_PRODUCT_REQUEST})
        const {data}=await axios.get(`https://fakestoreapi.com/products`)
        dispatch({
            type:FETCH_PRODUCT_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:FETCH_PRODUCT_FAILURE,
            payload:error.message
        })
    }
}