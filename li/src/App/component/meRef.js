import React, { useState, useMemo, useEffect ,useRef} from 'react';
import { shallowEqual, useSelector,useDispatch } from 'react-redux'

export default function(){
    const [ count, setCount ] = useState(0);
    const dispatch = useDispatch()
    const counter = useSelector(state => state.appData)
    const doubleCount  = useMemo(()=>{
        return 2 * count
    },[count])
    const timerId = useRef();
    useEffect(()=>{
        timerId.current = setInterval(()=>{
            setCount(count=>count+1)
        },1000)
        console.log(counter)
        dispatch({
            type: 'acts',
            data: 1111
        })
    }, []);
    useEffect(()=>{
        if(count>10){
            clearInterval(timerId.current)
        }
    })
    return (
        <>
            <button  onClick={()=>{setCount(count+1)}}>Count:{count},double:{doubleCount}</button>
        </>
    )
}