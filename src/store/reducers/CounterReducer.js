const initialState={
    count : 0
}

export default function CounterReducer(state=initialState,action)
{
    if(action.type==='increment/count1')
    {
        return{
            ...state,
            count:state.count+2
        }
    }

    else if(action.type==='decrement/count1')
    {
        return{
            ...state,
            count:state.count-2
        }
    }

    else{
        return state;
    }
}

