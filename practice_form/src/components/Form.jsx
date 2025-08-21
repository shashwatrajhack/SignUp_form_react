import React, { useState } from "react";

const Form = () => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");

  const handleSave = () => {
    if (email === "" || password === "" || username === "" || contact === "") {
      return window.alert("Fill in the details");
    }

  };
  return (
    <div className="form">
      <div>
        <h1>SignIn Form</h1>
      </div>
      <div className="fields">
        <label>Username</label>
        <input
          type="text"
          className="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          className="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Contact</label>
        <input
          type="tel"
          className="contact"
          placeholder="Contact"
          onChange={(e) => setContact(e.target.value)}
        />

        <button onClick={handleSave}>Submit</button>
      </div>
    </div>
  );
};

export default Form;
