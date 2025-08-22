import React from "react";
import Product from "./Product";

function DataTable({ saveProduct, setFormValue, setSaveProduct, setToggle,setIndx }) {
  const editHandle = (id) => {
    //  setFormValue({ ...formValue,})
    console.log(saveProduct[id]);
    setFormValue(saveProduct[id]);

    saveProduct[id];

    localStorage.getItem("key");
    setToggle(true)
    setIndx(id)
  };

  const deleteHandle = (id) => {
    saveProduct.splice(id, 1);
    console.log(saveProduct);
    setSaveProduct([...saveProduct]);
    localStorage.setItem("key", JSON.stringify(saveProduct));
  };

  return (
    <div>
      {saveProduct?.length ? (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Product</th>
              <th>Price</th>
              <th>Product Category</th>
              <th>color</th>
              <th>discount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {saveProduct.map((saveProduct, idx) => (
              <tr key={saveProduct.rid}>
                <th>{saveProduct.rid}</th>
                <th>{saveProduct.name}</th>
                <th>{saveProduct.price}</th>
                <th>{saveProduct.productCat}</th>
                <th>{saveProduct.color}</th>
                <th>{saveProduct.discount}%</th>
                <th>
                  <button onClick={() => editHandle(idx)}>Edit</button>
                  <button onClick={() => deleteHandle(idx)}>Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        "Data loading......."
      )}
    </div>
  );
}

export default DataTable;
