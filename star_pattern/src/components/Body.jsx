import React from "react";
import { useState} from "react";

function Body() {
  const [starPattern1,setStarPattern1] = useState(0);
  const [num,setNum] = useState('');
  const [star,setStar] = useState("");
  const handleStar = ()=>{
    console.log(num)
    setStarPattern1(num)
  }

  const patternBuilding = () => {
    
    
    for(let i = 0;i<parseInt(num);i++){
     
      
      for(let j = 0;j<parseInt(num);j++){
       setStar("*")
       console.log(star);

      }
    }
  }
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
            onChange={(e)=>setNum(e.target.value)}
          />
          
        <button className="bg-blue-800 text-white rounded-md" onClick={()=>{handleStar 
          patternBuilding
        }}>Submit</button>
        </div>
      </div>
      <div>
        {starPattern1}
      </div>
    </div>
  );
}

export default Body;
