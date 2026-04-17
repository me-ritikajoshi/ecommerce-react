const initialState={
    cartCount:0
}

const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_TO_CART' :
            return{
                ...state,
                cartCount: state.cartCount + 1
            }
        case 'REMOVE_FROM_CART':
            return{
                ...state,
                cartCount: Math.max(0, state.cartCount - 1)
            }

            default:
                return state
    }
}

export default cartReducer
