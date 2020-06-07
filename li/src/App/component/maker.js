import React, { useState, useCallback, useEffect } from 'react';

export default ()=>{
    let [count, setCount] = useState({name:'gao'})

    let change=useCallback(()=>{
        alert(count.name)
    },[count])

    let change1 = function(){
        setCount((state)=>{
            return {name:state.name+'1111'}
        })
    }
    useEffect(()=>{
        alert('a')
    },[])
    return (<div>
            <button onClick={change}>按钮</button>
            <span onClick={change1}>{count.name}</span>
        </div>)
}

