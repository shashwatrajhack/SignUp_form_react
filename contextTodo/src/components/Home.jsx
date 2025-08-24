import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  const { addTodo, setAddTodo } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");
  const [tmp, setTmp] = useState({});

  const handleClick = () => {
    if (!inputValue.trim()) return;
    setAddTodo({ ...addTodo, [inputValue]: [] });
    setInputValue("");
  };

  const deleteHandle = (x) => {
    

    if (x) {
        
      delete addTodo[x];
      setAddTodo({ ...addTodo });
    }
  };

  const handleInput = (e) => {
    if (e.keycode === 13) {
      handleClick();
    }
  };

  const editTodo = (x) => {
    setInputValue(x);
    setTmp({[x]:addTodo[x]})// {game:["sd"]}
  }
  const handleUpdate = ()=>{
    // tmp = {game:["sd"]}
    // Object.keys(tmp) = ["game"]
    // tmp[Object.keys(tmp)[0]]  = tmp['game']
    addTodo[inputValue] = tmp[Object.keys(tmp)[0]]
    delete addTodo[Object.keys(tmp)[0]];
    setAddTodo({...addTodo})
    setTmp({});
    setInputValue('')
  }
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={(e) => handleInput(e)}
      />

      {!Object.keys(tmp)?.length ? <button onClick={handleClick}>Add Todo</button> : <button onClick={handleUpdate}>Update Todo</button>}
      

      {Object.keys(addTodo).map((x, i) => (
        <div className="todoList">
        <Link key={i} to={`/subtodo/${x}`}>
          <li>
            {x}
          </li>
        </Link>
         <button onClick={()=>editTodo(x)}>edit</button>
        <button onClick={() => deleteHandle(x)}>Delete Todo</button>
        </div>
      ))}
    </div>
  );
}
