import { useState, useRef } from "react";

function Body_main() {
  const [toggle, setToggle] = useState(false);

  const saveEmail = useRef("");
  const savePassword = useRef("");
  const saveUsername = useRef("");

  const handleSave = () => {
    if (
      saveEmail === "" ||
      savePassword === "" ||
      (toggle && saveUsername === "")
    ) {
      window.alert("fill the details");
    }

    const data1 = localStorage.getItem("data");

    if (data1 === null) {
      if(!toggle){
        return window.alert("user doesn't exist")
      }
      let arr = [
        {
          email: saveEmail.current.value,
          password: savePassword.current.value,
          userName: saveUsername.current.value,
        },
      ];
      localStorage.setItem("data", JSON.stringify(arr));
    } else {
      let data2 = JSON.parse(data1);
      for (let i = 0; i < data2.length; i++) {
        if (toggle) {
          if (
            data2[i].email === saveEmail.current.value ||
            data2[i].password === savePassword.current.value
          ) {
            return window.alert("user already exist");
          }
        }
        else{
          if (
            data2[i].email === saveEmail.current.value &&
            data2[i].password === savePassword.current.value
          ) {
            return window.alert("user loggedin");
          }
        }
      }

      data2.push({
        email: saveEmail.current.value,
        password: savePassword.current.value,
        userName: saveUsername.current.value,
      });
      localStorage.setItem("data", JSON.stringify(data2));
    }
    saveEmail.current.value = "";
    savePassword.current.value = "";
    saveUsername.current.value = "";
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
          ref={saveEmail}
          required
        />
      </div>
      {toggle && (
        <div>
          <input
            className="bg-white border-2 rounded-md m-1 w-full"
            type="text"
            placeholder="username"
            ref={saveUsername}
            required
          />
        </div>
      )}
      <div className=" justify-center items-center m-1 w-full">
        <input
          className="bg-white border-2 rounded-md w-full"
          type="password"
          placeholder="Password"
          ref={savePassword}
          required
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
