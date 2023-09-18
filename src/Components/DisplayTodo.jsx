import React from 'react';

const DisplayTodo = ({allTodo}) => {
  return (
    <div>
      <h1>display all Todo</h1>
      {
        allTodo.forEach((arr, index) =>(
          <h1 key={index}>{arr}</h1>
        ))
      }
    </div>
  )
}

export default DisplayTodo;
