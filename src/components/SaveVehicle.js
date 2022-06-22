import React, { useState } from "react";
// import Axios from 'axios'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { createVehicle } from "../store/actions/VehicleActions";
function SaveVehicle() {

    const [vName, setVName] = useState("");
    const [vModel, setVModel] = useState("");
    const [vColor, setVColor] = useState("");
    const [vPrice, setVPrice] = useState("");


    const newvehicle = useSelector(state=>state.VehicleReducer.newVehicle);
    const dispatch=useDispatch();
    const handleSubmit = () => {

        const payload =
        {
            vehicleName: vName,
            vehicleModel: vModel,
            vehicleColor: vColor,
            vehiclePrice: vPrice
        }
        dispatch(createVehicle(payload))

    
    }


    return (

        <div className="container">

            <h2 style={{ backgroundColor: "lightblue" }}>Add Vehicle</h2>
            <div className="form-group"><label>
                Vehicle Name </label>
                <input type="text" name="Name" className="form-control" value={vName} onChange={e => setVName(e.target.value)}></input>
            </div>
            <div className="form-group"><label>
                Vehicle Model </label>
                <input type="text" name="Model" className="form-control" value={vModel} onChange={e => setVModel(e.target.value)}></input>
            </div>
            <div className="form-group"><label>
                Vehicle Color </label>
                <input type="text" name="Color" className="form-control" value={vColor} onChange={e => setVColor(e.target.value)}></input>
            </div>
            <div className="form-group"><label>
                Vehicle Price </label>
                <input type="text" name="Price" className="form-control" value={vPrice} onChange={e => setVPrice(e.target.value)}></input>
            </div>

            <div>
                <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </div>

            <div style={{ float: "left" }}>
                <Link to="/" className="btn btn-secondary">BackToHome</Link>
            </div>

        </div>



    )

}

export default SaveVehicle;