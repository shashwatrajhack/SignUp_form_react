import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Subtodo({ addTodo, setAddTodo }) {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");
  console.log(addTodo);
  let keyname = useParams().name;

  useEffect(() => {
    console.log(addTodo[keyname]);
    if (!addTodo[keyname]) {
      navigate("/home", { replace: true });
    }
  });

  function handleTodo() {
    addTodo[keyname].push(inputValue);
    setAddTodo({...addTodo});
    setInputValue("");
  }

  function handleClick(e){
    if (e.keyCode === 13){
      handleTodo()
    }
  }

  function deleteTodo(){
    addTodo[keyname].pop();
    setAddTodo({...addTodo})
  }

  //console.log(useParams().name)
  console.log(addTodo[keyname]);
  return (
    <div>
      <div>Add your todo here</div>
      <input value={inputValue} onKeyUp={(e) => handleClick(e)} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleTodo}>Add Todo</button>
      <button onClick={deleteTodo}>Delete Todo</button>

      {(addTodo[useParams()?.name] ?? []).map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </div>
  );
}

export default Subtodo;
