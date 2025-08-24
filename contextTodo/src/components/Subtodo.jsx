import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { TodoContext } from "../context/TodoContext.jsx";
import { Link } from "react-router-dom";
function Subtodo() {
  const { addTodo, setAddTodo } = useContext(TodoContext); //use;
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const { name: keyname } = useParams();
  const [toggle, setToggle] = useState(false);
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    if (!addTodo[keyname]) {
      navigate("/home", { replace: true });
    }
  }, [addTodo, keyname, navigate]);

  function handleTodo() {
    if (toggle) {
      addTodo[keyname][temp] = inputValue;
      setAddTodo({ ...addTodo });
      setToggle(false);
      setInputValue("");
    } else {
      if (!inputValue.trim()) return;
      addTodo[keyname].push(inputValue);
      setAddTodo({ ...addTodo });
      setInputValue("");
    }
  }

  function handleClick(e) {
    if (e.keyCode === 13) {
      handleTodo();
      console.log(addTodo);
    }
  }

  const deleteTodo = (i) => {
    addTodo[keyname].splice(i, 1);
    setAddTodo({ ...addTodo });
  };

  const handleUp = (i) => {
    let temp = addTodo[keyname][i];
    addTodo[keyname][i] = addTodo[keyname][i - 1];
    addTodo[keyname][i - 1] = temp;
  

    setAddTodo({...addTodo});
    console.log(addTodo);
  };

  const handleDown = (i) => {
    let temp = addTodo[keyname][i];
    addTodo[keyname][i] = addTodo[keyname][i + 1];
    addTodo[keyname][i + 1] = temp;

    setAddTodo({...addTodo});
   
  };

  const editTodo = (i) => {
    setTemp(i);
    setInputValue(addTodo[keyname][i]);
    setToggle(true);
    console.log(addTodo[keyname][i]);
  };

  return (
    <div>
      <div>Add your todo here</div>
      <input
        value={inputValue}
        onKeyUp={handleClick}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleTodo}>
        {toggle ? "Update Todo" : "Add Todo"}
      </button>

      {(addTodo[keyname] ?? []).map((x, i) => (
        <li key={i}>
          {x} <button onClick={() => editTodo(i)}>edit</button>
          <button onClick={() => deleteTodo(i)}>Delete Todo</button>
          { i !== 0 && <button onClick={() => handleUp(i)}>Up</button>}
         { i !== addTodo[keyname].length -1 && <button onClick={() => handleDown(i)}>Down</button>}
        </li>
      ))}
    </div>
  );
}

export default Subtodo;
