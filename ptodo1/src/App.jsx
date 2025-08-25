import { useState } from "react";
import Home from "./components/Home";
import Subtodo from "./components/Subtodo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";

function App() {
  const [addTodo, setAddTodo] = useState({});

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route
            path="/home"
            element={<Home addTodo={addTodo} setAddTodo={setAddTodo} />}
          />
          <Route
            path="/subtodos:name"
            element={<Subtodo addTodo={addTodo} setAddTodo={setAddTodo} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
