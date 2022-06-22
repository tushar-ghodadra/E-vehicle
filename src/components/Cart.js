import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { addToCart } from '../store/actions/CartActions'
import { useState } from "react";
import { NumberValidator } from "../lib/validation";
function Cart() {
    const cart1 = useSelector(state => state.CartReducer.cart);
    const dispatch = useDispatch();
    const vehicle = useSelector(state => state.VehicleReducer.vehicle);
    // const [vId, setVId] =useState(vehicle.vehicleId);
    //  const user = useSelector(state)
    // const [uId, setUID] = useState("")
    // const [vId, setVId] = useState(vehicle.vehicleId)
    const myUser = localStorage.getItem("myUser");
    const [qty, setQty] = useState("")


    const handleSubmit = () => {

        const payload =
        {
            userId: JSON.parse(myUser).userId,
            vehicleId: vehicle.vehicleId,
            quantity: qty
        }
        dispatch(addToCart(payload));
        alert("added to cart successfully");
    }

    // const myFunction = async () => {
    //     dispatch(addToCart())
    // };

    // useEffect(() => {
    //     myFunction();
    // });

    return (


        <div className="container">

            <h2 style={{ backgroundColor: "lightblue" }}>Cart Details</h2>
            {/* <div className="form-group"><label>
                User Id  </label>
                <input type="text" name="userId" className="form-control" value={uId} onChange={e => setUID(e.target.value)}></input>
            </div> */}
            {/* <div className="form-group"><label>
                Vehicle Id </label>
                <input type="text" name="Id" className="form-control" value={vId} onChange={e => setVId(e.target.value)}></input>
            </div> */}

            <div className="form-group"><label>
                quantity</label>
                <input
                    type="text"
                    name="quantity"
                    className="form-control"
                    value={qty}
                    onChange={e => {
                        setQty(e.target.value)
                        // NumberValidator(e)
                    }}
                // onKeyPress={NumberValidator} 
                />
            </div>
            {/* <div className="form-group"><label>
                Vehicle Color </label>
                <input type="text" name="Color" className="form-control" value={vColor} onChange={e => setVColor(e.target.value)}></input>
            </div>
            <div className="form-group"><label>
                Vehicle Price </label>
                <input type="text" name="Price" className="form-control" value={vPrice} onChange={e => setVPrice(e.target.value)}></input>
            </div> */}

            <div>

                <button onClick={handleSubmit} className="btn btn-primary">update</button>
            </div>

            {/* <div style={{ float: "left" }}>
                <Link to="/" className="btn btn-secondary">BackToHome</Link>
            </div> */}

        </div>


        // <div>
        //     <h1>--Your Cart--</h1>

        //     {
        //       <div>
        //         <p>vehicle id : {vId}</p>
        //           {/* <p>vehicle id : {cart1.vehicleId} </p> */}
        //           <p> {vehicle.vehicleName}</p>


        //         </div>

        //     }
        // </div>
    )
}


export default Cart;