const initialState={
    count : 0
}

export default function CounterReducer2(state=initialState,action)
{
    if(action.type==='increment/count2')
    {
        return{
            ...state,
            count:state.count+1
        }
    }

    else if(action.type==='decrement/count2')
    {
        return{
            ...state,
            count:state.count-1
        }
    }

    else{
        return state;
    }
}

