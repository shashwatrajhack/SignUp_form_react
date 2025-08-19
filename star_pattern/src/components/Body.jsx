import React from "react";
import { useState } from "react";

function Body() {
  const [starPattern1, setStarPattern1] = useState(0);
  const [num, setNum] = useState("");

  const handleStar = () => {
    console.log(num);
    const n = parseInt(num);
    let result = "";
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        result += "*";
      }
      result += "\n";
    }
    setStarPattern1(result);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
        result += "*";
      }

      result += "\n";
    }
    setStarPattern1(result);

    for (let i = 0; i < n; i++) {
      for (let k = 0; k < n - i - 1; k++) {
        result += " ";
      }
      for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
      }

      for (let p = 0; p < n - i - 1; p++) {
        result += " ";
      }

      result += "\n";
    }
    setStarPattern1(result);
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-xl justify-center shadow-lg w-96">
        <div>
          <h1>Star pattern</h1>
        </div>
        <div>
          <label>No. of rows : </label>
          <input
            type="text"
            placeholder="value of n"
            value={num}
            className="border-2 rounded-md"
            onChange={(e) => setNum(e.target.value)}
          />

          <button
            className="bg-blue-800 text-white rounded-md"
            onClick={handleStar}
          >
            Submit
          </button>

          <div>
            <pre>{starPattern1}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
