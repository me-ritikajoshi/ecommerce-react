const initialState={
    cartCount:0
}

const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_TO_CART' :
            return{
                cartCount:++state.cartCount
            }
        case 'REMOVE_FROM_CART':
            return{
                cartCount:--state.cartCount
            }

            default:
                return state
    }
}

export default cartReducer