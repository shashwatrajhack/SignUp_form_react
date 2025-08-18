import "./App.css";
import LogIn from "./components/LogIn";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      
       <div className="bg-white p-6 rounded-xl shadow-lg w-96"><LogIn /></div>
      
    </div>
  );
}

export default App;
