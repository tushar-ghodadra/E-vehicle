import axios from 'axios';

export function addToCart(payload) {
    console.log("payload", payload)
    return (dispatch) => {
        return axios.put("http://localhost:8085/cart/addItem", payload).then(
            resp => {

                dispatch(
                    {
                        type: "cart/item",
                        payload: resp.data
                    }
                )
            }
        )
    }
}
export function fetchOrder(id)
{
    return(dispatch) =>
    {
        return axios.get("http://localhost:8085/user/orders/"+id).then(
            resp=>
            
            {
              
                dispatch(
                    {
                        type:"order/get",
                        payload:resp.data
                    }
                )
            }
        )
    }
}

export function checkOutOrder(id,payload)
{
    return(dispatch) =>
    {
        return axios.post("http://localhost:8085/order/checkout/"+id,payload).then(
            resp=>
            
            {
              
                // dispatch(
                //     {
                //         type:"order/get",
                //         payload:resp.data
                //     }
                // )
            }
        )
    }
}
export function fetchCart(id) {
    return (dispatch) => {
        return axios.get("http://localhost:8085/user/cart/" + id).then(
            resp => {
                console.log(resp)
                console.log("welcome")
                dispatch(
                    {
                        type: "cart/get",
                        payload: resp.data
                    }
                )
            }
        )
    }
}