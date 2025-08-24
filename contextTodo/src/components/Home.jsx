import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  const { addTodo, setAddTodo } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (!inputValue.trim()) return;
    setAddTodo({ ...addTodo, [inputValue]: [] });
    setInputValue("");
  };

  const deleteHandle = () => {
    let lastValue = Object.keys(addTodo).pop();
    if (lastValue) {
      delete addTodo[lastValue];
      setAddTodo({ ...addTodo });
    }
  };

  const handleInput = (e) => {
    if (e.keycode === 13) {
      handleClick();
    }
  };

  const editTodo = () => {
    setInputValue()

  }
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={(e) => handleInput(e)}
      />

      <button onClick={handleClick}>Add Todo</button>
      <button onClick={deleteHandle}>Delete Todo</button>

      {Object.keys(addTodo).map((x, i) => (
        <Link key={i} to={`/subtodo/${x}`}>
          <li>
            {x} <button>edit</button>
          </li>
        </Link>
      ))}
    </div>
  );
}
