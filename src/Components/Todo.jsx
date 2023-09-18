import React, {useState} from 'react'

function Todo() {
    const [newTodo, setnewTodo] = useState('')
    const [state, setstate] = useState([...newTodo]);
    

  return (
    <div>
        <input type="text" onChange={e=>{
            setnewTodo(e.target.value)}
            } placeholder='Enter todo'/> <br />
        <button onClick={()=>setstate(newTodo)} className='btn btn-success'>ADD TODO</button>
        <div className="">{state} </div>
    </div>
  )
}

export default Todo