import Home from "./components/Home";
import Subtodo from "./components/Subtodo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import { TodoProvider } from "./context/TodoContext.jsx";

function App() {

  return (
    <TodoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/subtodo/:name" element={<Subtodo />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}

export default App;
