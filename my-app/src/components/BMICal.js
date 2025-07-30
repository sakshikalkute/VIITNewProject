import React, { useState } from 'react'
export default function BMICal() {
    const [weight, setWeight]=useState(0);
    const [height, setHeight]=useState(0);
    const [bmi, setBMI]=useState('');
    const [message, setMessage]=useState('');

    const weigntfun=(e)=>{
        setWeight(e.target.value)
    }
    const heigntfun=(e)=>{
        setHeight(e.target.value)
    }
    let calbmi=(e)=>{
        e.preventDefault();
        if(weight==0 || height==0){
            alert('Please the enter a valid weight and height')
        }
        else{
            let bmi=(weight/(height*height)*703)
            setBMI(bmi.toFixed(1))
        }
        if(bmi<25){
           setMessage('Your are underweight')
        }
        else if(bmi>=25 && bmi<30){
            setMessage('Your are healthy weight')
        }else{
            setMessage('Your are over weight')
        }
        
    }
    let reload=()=>{
        window.location.reload()
    }
  return (
    <div className="container">
        <h1>BMI</h1>
        <form onSubmit={calbmi}>
            <div>
            <label>Weight(ibs)</label>
            <input type="text" placeholder='Input Weight' value={weight} onChange={weigntfun}></input>
            </div>
            <div>
            <label>Height</label>
            <input type="text" placeholder='Input Height' value={height} onChange={heigntfun}></input>
            </div>
            <div>
            <button className='btn' type='Submit'>Submit</button>
            <button className='btn' type='Reset' onClick={reload}>Reset</button>
            </div>
            <div className='center'>
            <h4>Your BMI is:{bmi}</h4>
            <p>{message}</p>
            </div>
        </form>
    </div>
  )
}
