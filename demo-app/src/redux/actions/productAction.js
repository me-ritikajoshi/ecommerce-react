import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_FAILURE } from "../constants/productConstant";
import { getProducts } from "../../services/productService";


export const fetchProducts=()=>async(dispatch)=>{
    try{
        dispatch({type:FETCH_PRODUCT_REQUEST})
        const data=await getProducts()
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
