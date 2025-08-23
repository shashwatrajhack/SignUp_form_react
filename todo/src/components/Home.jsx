import { useState } from "react";
function Home(){
    const [inputValue, setInputValue] = useState("");
  const [addTodo, setAddTodo] = useState({});

  const handleClick = () => {
    setAddTodo({ ...addTodo, [inputValue]: [] });
    setInputValue("");
  };

  const deleteHandle = () => {
    let lastValue = Object.keys(addTodo).pop();
    delete addTodo[lastValue]
        setAddTodo({...addTodo});
  }
  const handleInput = (e)=>{
    if(e.keyCode === 13){
      handleClick()
    }
  }
  

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={(e) => handleInput(e)}
/>
      <button onClick={handleClick}>Add</button>
      <button onClick={deleteHandle}>Delete</button>
      {Object.keys(addTodo).map((x) => (
        <li>{x}</li>
      ))}
    </div>
  );
}
export default Home;