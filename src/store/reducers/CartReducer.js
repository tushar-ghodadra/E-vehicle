const initialState={
    cart:null,
    carts:[],
    usercart:null,
    userorder:null
}

export default function CartReducer(state=initialState,action)
{
    if(action.type === 'cart/item')
    {
        return ({
            ...state,
            cart : action.payload
        })
    }
    if(action.type==='order/get')
    {
        return(
            {
                ...state,
                userorder:action.payload
            }
        )
    }
    if(action.type==='cart/get')
    {
        console.log(action.payload)
        return ({
          
            ...state,
            usercart : action.payload
        })
    }

    else {
        return state;
    }
}

