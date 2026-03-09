import React, { useState } from 'react'

function Counter() {

  //usestate
  const[count,setcount]=useState(0)

    function increment(){
      setcount(count+1)
      console.log(count)
    }

    function decrement(){
      setcount(count-1)  
      console.log(count)
    }
  
    function reset(){
      setcount(0)
      console.log(count)
    }


  return (
    <div className='container mt-5 p-5 border border-secondary'> 
        <h3 className="text-center">Counter App</h3>
        
        <input type="text" name="" id="" className="form-control" value={count}/>
        <br />
        <div className="d-flex justify-content-evenly gap-3">
        <button className="btn btn-primary" onClick={increment}>+</button>
        <button className="btn btn-danger" onClick={decrement}>-</button>
        <button className="btn btn-secondary" onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Counter