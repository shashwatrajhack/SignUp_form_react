import React from 'react'

import { useState } from 'react';

function Subtodo({addTodo , setAddTodo}) {

    const [inputValue,setInputValue] = useState("");
  return (
    <div>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button>Add Todo</button>
    </div>
  )
}

export default Subtodo;
