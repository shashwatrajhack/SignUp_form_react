import { useState } from "react";

function Body_main() {
  const [toggle, setToggle] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSave = () => {
    if (email === "" || password === "" || (toggle && username === "")) {
      return window.alert("fill the details");
    }

    const data1 = localStorage.getItem("data");

    if (data1 === null) {
      if (!toggle) {
        return window.alert("user doesn't exist");
      }
      let arr = [
        {
          email: email,
          password: password,
          userName: username,
        },
      ];
      localStorage.setItem("data", JSON.stringify(arr));
      console.log(arr);
    } else {
      let data2 = JSON.parse(data1);
      for (let i = 0; i < data2.length; i++) {
        if (toggle) {
          if (data2[i].email === email || data2[i].password === password) {
            return window.alert("user already exist");
          }
        } else {
          if (data2[i].email === email && data2[i].password === password) {
            return window.alert("user loggedin");
          }
        }
      }

      data2.push({
        email: email,
        password: password,
        userName: username,
      });
      localStorage.setItem("data", JSON.stringify(data2));
    }
    setEmail("");
    setPassword("");
    setUsername("");
    console.log(data1);
  };

  return (
    <div>
      <div>
        <button
          className={`button1 ${!toggle ? "clickedButton" : ""}`}
          onClick={() => {
            setToggle(false);
          }}
        >
          Login
        </button>
        <button
          className={`button1 ${toggle ? "clickedButton" : ""}`}
          onClick={() => {
            setToggle(true);
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
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      {toggle && (
        <div>
          <input
            className="bg-white border-2 rounded-md m-1 w-full"
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
      )}
      <div className=" justify-center items-center m-1 w-full">
        <input
          className="bg-white border-2 rounded-md w-full"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div>
        <h6>Forgot Password </h6>
      </div>
      <div>
        <button
          className={`button2 ${
            email === "" || password === "" || (toggle && username === "")
              ? "disable_button"
              : ""
          }`}
          onClick={handleSave}
          disabled={
            email === "" || password === "" || (toggle && username === "")
          }
        >
          {toggle ? "SignUp" : "SignIn"}
        </button>
      </div>
      {!toggle && (
        <div className="member">
          <p>
            Not a member ?{" "}
            <span
              className="cursor-pointer"
              onClick={() => {
                setToggle(true);
              }}
            >
              Signup now{" "}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Body_main;
