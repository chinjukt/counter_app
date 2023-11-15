import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter1() {

    //state creation 
    const [range,setrange] = useState("")
    console.log(range);

    //to dispatch useDispatch hook is used
    const dispatch = useDispatch()

    //component can access state by using useSelector hook
    const count = useSelector((state)=>state.counter.value)

  return (
    <>
    <div className='d-flex align-items-center w-100 justify-content-center flex-column mt-5'>
       <h1 style={{fontSize:'90px'}}>{count}</h1>
       <div className='mt-5'>
        <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning p-3'>Decrement</button>
        <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3 ms-3'>Reset</button>
        <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success p-3 ms-3'>Increment</button>
       </div>
    </div>

    <div className='w-100 mt-5' onChange={(e)=>setrange(e.target.value)}>
        <input type="text" className='form-control' placeholder='enter the range' style={{borderColor:'blue'}} />
    </div>
    </>

  )
}

export default Counter1