import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVehicles } from '../store/actions/VehicleActions';
import img1 from "../images/kwid.jpg"
import img2 from "../images/revolt.jpg"
import img3 from "../images/maruti-alto-granite-grey.jpg"
import img4 from "../images/shelby.jpg"




function FetchAllVehicles() {

    const vehicles = useSelector(state => state.VehicleReducer.vehicles)
    const dispatch = useDispatch();

    const myFunction = async () => {
        dispatch(getAllVehicles())
    };

    useEffect(() => {
        myFunction();
    },[]);
    let ImgArry = [img2, img1, img3, img4]
    console.log("vehicles", vehicles)
    return (
        <div>
            <h2 style={{ fontWeight: "bold", color: "Highlight" }} className="heder_style border-bottom py-3">E-Vehicle ShowRoom</h2>
            <div className='col-12 pt-4'>
                <div className="row justify-content-center">
                    {
                        vehicles.map((p, index) =>
                            <div key={index} className=" col-3  link_css">
                                <Link to={`/vehicle/get/${p.vehicleId}`}>
                                    <div className="card" style={{ width: "100%", height: "auto" }}>
                                        <img className="card-img-top" src={ImgArry[index]} alt="motor" height={181}/>
                                        <div className="card-body">
                                        <p className="card-text m-0 pt-1" style={{fontSize:"13px"}}> Model :- {p.vehicleModel}</p>
                                        
                                            <h4 className="card-title m-0 pt-1">{p.vehicleName}</h4>
                                            <p className="card-text m-0 pt-1" style={{fontSize:"13px",color:"#999"}}> Color : {p.vehicleColor}</p>
                                            {/* <p className="card-price m-0 pt-1"> INR {p.vehiclePrice}</p> */}

                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default FetchAllVehicles;