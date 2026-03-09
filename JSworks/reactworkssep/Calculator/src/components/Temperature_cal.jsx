import React from 'react'
import { useState } from 'react'


function Temperature_cal() {
    const [temp, setTemp] = useState('');
    const [result, setResult] = useState('');

    // function input(event) {
    //     setTemp(event.target.value)
    // }

    // (parameters)=>(statements)

    function convertToFarhenheit() {
        setResult((temp * 1.8) + 32)
    }
    return (

        <div className='container text-center'>
            <input type="text" className='form-control mt-3 p-3' placeholder='enter Temp in deg celsius' onChange={(event) => setTemp(event.target.value)} />
            <br />
            <button className='btn btn-primary mt-3 ' onClick={convertToFarhenheit}><strong>=</strong></button>
            <br />
            <input type="text" className='form-control mt-3 p-3' placeholder='Temp in Faraheit' value={result} />
        </div>
    )
}

export default Temperature_cal