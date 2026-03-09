import React from 'react'
import { useState } from 'react'

function Calculator() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState('')


  function input1(event){
    setNum1(event.target.value)
  }

  function input2(event){
    setNum2(event.target.value)
  }



  function add(){
    setResult(Number(num1)+Number(num2))
  }
  function subtract(){
    setResult(num1-num2)
  }
  function multiply(){
    setResult(num1*num2)
  }
  function divide(){
    setResult(num1/num2)
  }
  


  return (
    <>
      <div className="container mt-5 w-25 p-5 border border-2 rounded">
        <h1 className='text-center'>Arithmetic Calculator</h1>
        <input type="text" className="mt-3 form-control" placeholder='enter a number' onChange={input1}/>
        <br />
        <input type="text" className="mt-3 form-control" placeholder='enter a number' onChange={input2}/>
        <div className="mt-5 d-flex justify-content-between">
        <button className="btn btn-dark" onClick={add}>+</button>
        <button className="btn btn-primary" onClick={subtract} >-</button>
        <button className="btn btn-secondary" onClick={multiply} >*</button>
        <button className="btn btn-danger" onClick={divide} >/</button>
        </div>
        <div>
          <h4 className="mt-5 ">Result: {result}</h4>
        </div>
      </div>
    </>
  )
}

export default Calculator