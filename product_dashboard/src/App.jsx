import "./App.css";
import Product from "./components/Product";
import DataTable from "./components/DataTable";
import { useState, useEffect } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  
  const [indx, setIndx] = useState(null);
  const [formValue, setFormValue] = useState({
    name: "",
    price: 500,
    productCat: "",
    color: "#ffffff",
    discount: "",
    isAvailable: undefined,
    rid: 0,
    isNumberOfValue: "",
  });
  const [saveProduct, setSaveProduct] = useState([]);
  useEffect(() => {
    const saved = localStorage.getItem("key");
    if (saved) {
      setSaveProduct(JSON.parse(saved));
    }
  }, []);
  return (
    <div>
      <div className="main-body-product">
        <Product
          formValue={formValue}
          setFormValue={setFormValue}
          saveProduct={saveProduct}
          setSaveProduct={setSaveProduct}
          toggle={toggle}
          indx={indx}
          setToggle={setToggle}
        />
      </div>
      <DataTable
        saveProduct={saveProduct}
        setFormValue={setFormValue}
        setSaveProduct={setSaveProduct}
        toggle={toggle}
        setToggle={setToggle}
        setIndx={setIndx}
      />
    </div>
  );
}

export default App;
