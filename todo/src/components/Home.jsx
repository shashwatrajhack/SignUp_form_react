import { Link } from "react-router-dom";
function Home({ addTodo, inputValue, setAddTodo, setInputValue }) {
  // {grocery:['rice','maida'],game:['cdf']}
  const handleClick = () => {
    setAddTodo({ ...addTodo, [inputValue]: [] });
    setInputValue("");
  };

  const deleteHandle = () => {
    let lastValue = Object.keys(addTodo).pop();
    delete addTodo[lastValue];
    setAddTodo({ ...addTodo });
  };
  const handleInput = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

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

      {Object.keys(addTodo).map((x, i) => (
        <Link key={i} to={`/subtodo/${x}`}>
          <li key={i}>{x}</li>
        </Link>
      ))}
    </div>
  );
}
export default Home;
