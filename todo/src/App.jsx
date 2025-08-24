import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Subtodo from "./components/Subtodo";
import { useState } from "react";

function App() {
  const [addTodo, setAddTodo] = useState({});
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route
            path="/home"
            element={
              <Home
                addTodo={addTodo}
                setAddTodo={setAddTodo}
              />
            }
          />
          <Route
            path="/subtodo/:name"
            element={<Subtodo addTodo={addTodo} setAddTodo={setAddTodo} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
