const initialState = {
    vehicles: [],
    vehicle : null,
    newVehicle:null,
    updateVehicle:null
}

export default function VehicleReducer(state = initialState, action) {

    if (action.type === 'vehicle/all') {
        
        return ({
            ...state,
            vehicles: action.payload
        })
    }

    else if(action.type==='vehicle/get')
    {
        return(
            {
                ...state,
                vehicle :action.payload
            }
        )
    }
    else if(action.type==='vehicle/save')
    {
        return(

            {
                ...state,
                newVehicle:action.payload
            }
        )
    }

    else if(action.type==='vehicle/update')
    {
        return(

            {
                ...state,
                updateVehicle:action.payload
            }
        )
    }

    else {
        return state;
    }
}

