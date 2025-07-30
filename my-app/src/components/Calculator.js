import React, { useState } from 'react'
export default function BMICal() {
    const [no1, setNo1]=useState(0);
    const [no2, setNo2]=useState(0);
    const [result, setResult]=useState('');
    const No1fun=(e)=>{
        setNo1(e.target.value)
    }
    const No2fun=(e)=>{
        setNo2(e.target.value)
    }
    let Add=(e)=>{
        e.preventDefault();
        const result=parseFloat(no1)+parseFloat(no2)
        setResult(result)
    }
    let Sub=(e)=>{
        e.preventDefault();
        const result=parseFloat(no1)-parseFloat(no2)
        setResult(result)
    }
    let Multi=(e)=>{
        e.preventDefault();
        const result=parseFloat(no1)*parseFloat(no2)
        setResult(result)
    }
    let Divide=(e)=>{
        e.preventDefault();
        const result=parseFloat(no1)/parseFloat(no2)
        setResult(result)
    }
  return (
    <div className="container">
        <h1>Calculator</h1>
        <form>
            <div>
            <label>Number1</label>
            <input type="text" placeholder='Input no' value={no1} onChange={No1fun}></input>
            </div>
            <div>
            <label>Height</label>
            <input type="text" placeholder='Input no' value={no2} onChange={No2fun}></input>
            </div>
            <div>
            <button className='btn btn-primary mx-1 mt-3' onClick={Add}>Add</button>
            <button className='btn btn-primary mx-1 mt-3' onClick={Sub}>Sub</button>
            <button className='btn btn-primary mx-1 mt-3' onClick={Multi}>Multi</button>
            <button className='btn btn-primary mx-1 mt-3' onClick={Divide}>Divide</button>
            </div>
            <div className='center'>
            <h4>Result:{result}</h4>
            <p></p>
            </div>
        </form>
    </div>
  )
}
