function Product({
  formValue,
  setFormValue,
  saveProduct,
  setSaveProduct,
  toggle,
  indx,
  setToggle
}) {
  const handleForm = (value, keyName) => {
    setFormValue({ ...formValue, [keyName]: value });
  };

  const updateSubmit = () => {
    saveProduct[indx] = formValue;
    setSaveProduct([...saveProduct]);
    localStorage.setItem("key", JSON.stringify(saveProduct));
       setFormValue({
      name: "",
      price: 500,
      productCat: "",
      color: "#ffffff",
      discount: "",
      isAvailable: undefined,
      rid: 0,
      isNumberOfValue: "",
    });
    setToggle(false)
  };

  const handleSubmit = () => {
    if (!formValue.name || !formValue.isAvailable) {
      return window.alert("fill details");
    }
    formValue.rid = saveProduct.length + 1;
    setSaveProduct([...saveProduct, formValue]);
    setFormValue({
      name: "",
      price: 500,
      productCat: "",
      color: "#ffffff",
      discount: "",
      isAvailable: undefined,
      rid: 0,
      isNumberOfValue: "",
    });

    const data2 = localStorage.getItem("key");
    if (data2) {
      let parsedValue = JSON.parse(data2);
      localStorage.setItem("key", JSON.stringify([...parsedValue, formValue]));
    } else {
      localStorage.setItem("key", JSON.stringify([formValue]));
    }

    console.log(data2);
  };

  const productCatList = [
    "Mobiles & Tablets",
    "Shoes",
    "Jeans",
    "Shirt",
    "TV and Appliance",
  ];
  const shoes = [7, 8, 9, 10, 11];
  const size = ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="product_detail">
      <div>
        <h1>Product Table</h1>
      </div>
      <div className="product_form">
        <label>Products</label>
        <input
          type="text"
          value={formValue?.name}
          onChange={(e) => handleForm(e.target.value, "name")}
          required
        />
        <label>Price</label>
        <input
          min={500}
          max={10000}
          type="range"
          value={formValue?.price}
          onChange={(e) => handleForm(e.target.value, "price")}
        />
        <label>Product Categories : </label>
        <select
          name="product"
          required
          onChange={(e) => handleForm(e.target.value, "productCat")}
        >
          {productCatList.map((prod, i) => (
            <option key={i}>{prod}</option>
          ))}
        </select>
        <label>Color</label>
        <input
          type="color"
          value={formValue?.color}
          onChange={(e) => handleForm(e.target.value, "color")}
        />
        <label>Size</label>
        <select
          name="size"
          onChange={(e) => handleForm(e.target.value, "size")}
          disabled={
            !["Shoes", "Jeans", "Shirt"].includes(formValue?.productCat)
          }
        >
          {(formValue?.productCat === "Shoes"
            ? shoes
            : formValue?.productCat === "Shirt" ||
              formValue?.productCat === "Jeans"
            ? size
            : []
          ).map((prod, i) => (
            <option key={i}>{prod}</option>
          ))}
        </select>
        <label>Discount</label>
        <input
          type="number"
          min={20}
          max={90}
          value={formValue?.discount}
          onChange={(e) => handleForm(e.target.value, "discount")}
        />
        <fieldset>
          <legend>Available Product</legend>
          <label htmlFor="yes">
            <input
              type="radio"
              id="yes"
              name="agreement"
              checked={formValue?.isAvailable === true}
              onChange={() => handleForm(true, "isAvailable")}
            />{" "}
            Yes
          </label>
          <label htmlFor="no">
            <input
              type="radio"
              id="no"
              name="agreement"
              checked={formValue?.isAvailable === false}
              onChange={() => handleForm(false, "isAvailable")}
            />{" "}
            No
          </label>
        </fieldset>

        {formValue?.isAvailable && (
          <input
            type="number"
            placeholder="number of product avilable"
            onChange={(e) => handleForm(e.target.value, "isNumberOfValue")}
          />
        )}

        {!toggle ? (
          <button onClick={handleSubmit}>Submit</button>
        ) : (
          <button onClick={updateSubmit}>Update</button>
        )}
      </div>
    </div>
  );
}

export default Product;
