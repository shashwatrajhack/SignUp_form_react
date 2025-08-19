import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div>
        <h1>
          Today's date {date.toLocaleDateString()} - {date.toLocaleTimeString()}{" "}
        </h1>
      </div>
    </>
  );
}

export default App;
