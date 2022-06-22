import React, { useState } from "react";
// import Axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {updateVehicle} from "../store/actions/VehicleActions"
function EditVehicle() {

    const vehicle = useSelector(state=>state.VehicleReducer.vehicle);
    const navigate = useNavigate();
    const dispatch=useDispatch();

    const [vId, setVId] =useState(vehicle.vehicleId);
    const [vName, setVName] = useState(vehicle.vehicleName);
    const [vModel, setVModel] = useState(vehicle.vehicleModel);
    const [vColor, setVColor] = useState(vehicle.vehicleColor);
    const [vPrice, setVPrice] = useState(vehicle.vehiclePrice);

   
    const handleSubmit = () => {

        const payload =
        {    vehicleId:vId,
            vehicleName: vName,
            vehicleModel: vModel,
            vehicleColor: vColor,
            vehiclePrice: vPrice
        }
        dispatch(updateVehicle(payload));
        alert("vehicle updated");
        navigate(-1);

    
    }


    return (

        <div className="container">

            <h2 style={{ backgroundColor: "lightblue" }}>Add Vehicle</h2>
            <div className="form-group"><label>
                Vehicle Id </label>
                <input type="text" name="Id" className="form-control" value={vId} disabled></input>
            </div>
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
                <button onClick={handleSubmit} className="btn btn-primary">update</button>
            </div>

            <div style={{ float: "left" }}>
                <Link to="/" className="btn btn-secondary">BackToHome</Link>
            </div>

        </div>



    )

}

export default EditVehicle;