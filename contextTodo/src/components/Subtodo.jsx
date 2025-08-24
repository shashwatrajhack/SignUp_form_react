import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { TodoContext } from "../context/TodoContext.jsx";
import { Link } from "react-router-dom";
function Subtodo() {
  const { addTodo, setAddTodo } = useContext(TodoContext); //use;
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const { name: keyname } = useParams();
  

  useEffect(() => {
    if (!addTodo[keyname]) {
      navigate("/home", { replace: true });
    }
  }, [addTodo, keyname, navigate]);

  function handleTodo() {
    if (!inputValue.trim()) return;
    addTodo[keyname].push(inputValue);
    setAddTodo({ ...addTodo });
    setInputValue("");
  }

  function handleClick(e) {
    if (e.keyCode === 13) {
      handleTodo();
      console.log(addTodo);
    }
  }

  

  function deleteTodo() {
    addTodo[keyname].pop();
    setAddTodo({ ...addTodo });
  }

  function editTodo() {
    setInputValue(addTodo[keyname].pop());
    console.log(inputValue);
  }

  return (
    <div>
      <div>Add your todo here</div>
      <input
        value={inputValue}
        onKeyUp={handleClick}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleTodo}>Add Todo</button>
      <button onClick={deleteTodo}>Delete Todo</button>

      {(addTodo[keyname] ?? []).map((x, i) => (
        <li key={i}>
          {x} <button onClick={editTodo}>edit</button>
        </li>
      ))}
    </div>
  );
}

export default Subtodo;
