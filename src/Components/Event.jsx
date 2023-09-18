import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Food from './Food'


const Event = () => {
    const [name, setName] = useState('Sarah')
    const [number, setNumber] = useState(0)
    const [userName, setuserName] = useState('')

    const changeName = () => {
        setName('Hikmah')
        console.log(name);
    }
    const increment = () => {
        setNumber(number + 1)
    }
    const decrement = () => {
        if (number) {
            setNumber(number - 1)
        }
    }
    const chnageInput = ()=>{
        setName(userName)
    }
    return (
        <div>
            {/* <div className="w-50 mx-auto">
                <h1 className="px-8 py-3">{name}</h1>
                 <button className="btn btn-success" onClick={changeName}>Change Name</button>
                <h1 className="px-8 py-3">{number}</h1>
                <button className="btn btn-success" onClick={increment}>Increase</button>
                <button className="btn btn-success" onClick={decrement}>Decrease</button>
            </div> */}
            <div className=" w-25 mx-auto mt-5">
                <input type="text" className='w-100' onChange={e=>setName(e.target.value)}/>
            <button className='btn btn-success btn-lg mt-3'onClick={chnageInput}> Change</button>
            </div>
            <div>name{userName}</div>
            <Routes>
                <Route path='/food' element={<Food/>}/>
            </Routes>
        </div>
    )
}

export default Event