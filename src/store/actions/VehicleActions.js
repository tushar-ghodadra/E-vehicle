import axios from 'axios';
// import {useParams} from 'react-router-dom';


export function getAllVehicles() {
    return (dispatch) => {
        return axios.get("http://localhost:8085/vehicle/all").then(
            resp => {
                dispatch({
                    type: "vehicle/all",
                    payload: resp.data
                })
            }
        )
    }
}

export function createVehicle(payload) {
    return (dispatch) => {
        return axios.post("http://localhost:8085/vehicle/save",payload).then(
            resp => { 
                console.log(resp)
                alert("Vehicle saved with id " + resp.data.vehicleId);

                dispatch(
                    createVehicleSuccess(resp.data)
                )
            }
        )
    }
}

export function createVehicleSuccess(data)
{
    return(
    {
        type: "vehicle/save",
        payload:data
    }
    )

}

export function updateVehicle(payload) {
    return (dispatch) => {
        return axios.put("http://localhost:8085/vehicle/update",payload).then(
            resp => { 

                dispatch(
                    updateVehicleSuccess(resp.data)
                )
            }
        )
    }
}

export function updateVehicleSuccess(data)
{
    return{
        type:"vehicle/update",
        payload:data

    }
}



export function FetchVehicleById(id) {

    // const{id} = useParams();
    return (dispatch) => {
        return axios.get("http://localhost:8085/vehicle/find/"+id).then(
            resp =>
             {
                dispatch(
                    {
                        type: "vehicle/get",
                        payload: resp.data
                    })
                
            }

        )
    }
}