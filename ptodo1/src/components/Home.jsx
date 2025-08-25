import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home({ addTodo, setAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleInput = () => {
    setAddTodo({ ...addTodo, [inputValue]: [] });
    setInputValue("");
  };

  const deleteTodo = (x) => {
    if (x) {
      delete addTodo[x];
      setAddTodo({ ...addTodo });
    }
  };

  console.log(addTodo);

  return (
    <div>
      <input
        value={inputValue}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleInput}>Add Todo</button>

      {Object.keys(addTodo).map((x, i) => (
        <div>
          <Link key={i} to={`/subtodos/${x}`}>
            <li key={i}>{x}</li>
          </Link>
          <button>edit</button>
          <button onClick={() => deleteTodo(x)}>delete</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
