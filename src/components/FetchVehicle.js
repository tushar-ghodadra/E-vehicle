import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from 'react';
import { FetchVehicleById } from '../store/actions/VehicleActions'
import img1 from "../images/kwid.jpg"
import img2 from "../images/revolt.jpg"
import img3 from "../images/maruti-alto-granite-grey.jpg"
import { Link, useParams } from 'react-router-dom'
import { addToCart } from "../store/actions/CartActions";
import { NumberValidator } from "../lib/validation";


function FetchVehicle() {
    const [qty, setQty] = useState("")
    const vehicle = useSelector(state => state.VehicleReducer.vehicle);

    const dispatch = useDispatch();

    const { id } = useParams();
    const myUser = localStorage.getItem("myUser");

    const myFunction = async () => {
        dispatch(FetchVehicleById(id))
    };
    useEffect(() => {
        myFunction();
    }, []);

    const handleSubmit = () => {
        console.log("1234", myUser)
        if (JSON.parse(myUser).userId) {
            let payload =
            {
                userId: JSON.parse(myUser).userId,
                vehicleId: vehicle.vehicleId,
                quantity: qty
            }
            console.log("payload", payload)
            dispatch(addToCart(payload));
            alert("added to cart successfully");
        } else {
            window.location.href = "/customer/login"
        }

    }
    let ImgArry = [img2, img1, img3]
    return (

        <div>
            <h2 style={{ fontWeight: "bold", color: "Highlight" }} className="heder_style border-bottom py-3">Vehicle Details</h2>

            {/* <h1>---- Vehicle Details ----</h1> */}
            {
                vehicle !== null &&
                <div className="row pt-4">
                    <div className="col" >
                        <img src={ImgArry[id - 1]} alt="not found" style={{ width: "100%", height: "300px", objectFit: "contain" }} />
                    </div>
                    <div className="col">

                        <p> Vehicle Id : {vehicle.vehicleId}</p>
                        <p> Vehicle Name : {vehicle.vehicleName}</p>
                        <p> Vehicle Model : {vehicle.vehicleModel}</p>
                        <p> Vehicle Color : {vehicle.vehicleColor}</p>
                        <p> Vehicle Price : INR {vehicle.vehiclePrice}</p>

                        <div className="d-flex">
                            <div className="form-group">
                                <label>
                                    quantity</label>
                                <input type="text" name="quantity" className="form-control" value={qty} onChange={e => setQty(e.target.value)} style={{ width: "100px" }} onKeyPress={NumberValidator} />
                            </div>
                            <button type="button"
                                class="btn btn-success" onClick={handleSubmit} disabled={qty?.length > 0 && qty != "0"? false : true}>
                                <span class="glyphicon 
                    glyphicon-shopping-cart" >
                                </span>
                                <b style={{ color: "ButtonFace" }} > Add to Cart </b>
                            </button>
                        </div>

                    </div>

                </div>
            }
            <div>
                {/* <Link to="/vehicle/all" className="btn btn-secondary">Back</Link> */}
            </div>
        </div>
    )
}


export default FetchVehicle;