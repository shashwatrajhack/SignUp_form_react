import React from "react";
import { useState,useRef } from "react";
//import { handleSave } from "../utils/handleSave";


function Body_main() {
  const [toggle, setToggle] = useState(false);
  const saveEmail = useRef("");
  const savePassword = useRef("");
  const saveUsername = useRef("");

  const handleSave = () => {
  if (
    saveEmail.current.value == "" ||
    savePassword.current.value == "" ||
    (toggle && saveUsername.current.value == "")
  ) {
    return window.alert("Add user !!");
  }

  // LOGIN
  if (!toggle) {
    const raw = localStorage.getItem("data");
    if (!raw) return window.alert("User doesn't exist");

    let users = [];
    try {
      users = JSON.parse(raw);
    } catch {
      return window.alert("Corrupted user data");
    }

    const emailInput = saveEmail.current.value.trim().toLowerCase();
    const passInput = savePassword.current.value;

    // normalize each stored user to { email, password }
    const user = users
      .map((u) => ({
        email: (u.email ?? u.saveEmail ?? "").trim().toLowerCase(),
        password: (u.password ?? u.savePassword ?? "").trim(),
      }))
      .find((u) => u.email === emailInput && u.password === passInput);

    if (user) {
      window.alert("Login successful ✅");
    } else {
      window.alert("Invalid credentials ❌");
    }
  }

  if (saveEmail && savePassword) {
    if (toggle && saveUsername) {
      const userData = {
        saveEmail: saveEmail.current.value,
        savePassword: savePassword.current.value,
        userName: saveUsername.current.value,
      };

      const existingData = JSON.parse(localStorage.getItem("data")) || [];

      existingData.push(userData);
      localStorage.setItem("data", JSON.stringify(existingData));
      alert("User data saved to local storage as an object!");
    }
  }

  saveEmail.current.value = "";
  savePassword.current.value = "";
  saveUsername.current.value = "";
};


  return (
    <div>
      <div>
        <button
          className="p-2 m-2 border-2 rounded-md bg-blue-800 text-white text-2xl text-center cursor-pointer"
          onClick={() => {
            setToggle(false);
            console.log(toggle);
          }}
        >
          Login
        </button>
        <button
          className="p-2 m-2 border-2 rounded-md bg-blue-800 text-white text-2xl text-center cursor-pointer"
          onClick={() => {
            setToggle(true);
            console.log(toggle);
          }}
        >
          Signup
        </button>
      </div>
      <div className=" justify-center items-center ">
        <input
          className="bg-white border-2 m-1 rounded-md w-full "
          type="email"
          placeholder="Email Address"
          ref={saveEmail}
        />
      </div>
      {toggle && (
        <div>
          <input
            className="bg-white border-2 rounded-md m-1 w-full"
            type="text"
            placeholder="username"
            ref={saveUsername}
          />
        </div>
      )}
      <div className=" justify-center items-center m-1 w-full">
        <input
          className="bg-white border-2 rounded-md w-full"
          type="password"
          placeholder="Password"
          ref={savePassword}
        />
      </div>

      <div>
        <h6>Forgot Password ?</h6>
      </div>
      <div>
        <button
          className="bg-blue-600 rounded-md text-3xl text-white m-4 p-2 border-r-2"
          onClick={handleSave}
        >
          {toggle ? "SignUp" : "SignIn"}
        </button>
      </div>
    </div>
  );
}

export default Body_main;
