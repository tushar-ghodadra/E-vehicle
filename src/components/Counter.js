import React from 'react';
import {useDispatch,useSelector} from 'react-redux';

function Counter()
{
const counter1 = useSelector(state=>state.CounterReducer.count);
const counter2 = useSelector(state=>state.CounterReducer2.count);


    const dispatch = useDispatch()

    const counterIncrement =()=>{
        dispatch({
            type : 'increment/count1'

        })
    }

        const counterDecrement =()=>{
            dispatch({
                type : 'decrement/count1'
            })
        }

        const counterIncrement2 =()=>{
            dispatch({
                type : 'increment/count2'
    
            })
        }
    
            const counterDecrement2 =()=>{
                dispatch({
                    type : 'decrement/count2'
                })
            }
    
    return(

        <div>
            <h2>player one :{counter1}</h2>
            <button onClick={counterIncrement}>+</button> <button onClick={counterDecrement}>-</button>

            <h2>player two :{counter2}</h2>
            <button onClick={counterIncrement2}>+</button> <button onClick={counterDecrement2}>-</button>
        </div>
    )
}

export default Counter;