import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../reducks/users/operations";
import CrossX from "../assets/img/cross.png";
import Home from "../containers/Home";

const SignUp = () => {
  const dispatch = useDispatch();
  const [user_name, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");
  const inputUserName = (event) => {
    setUserName(event.target.value);
  };
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };
  const inputPassword = (event) => {
    setPassword(event.target.value);
  };
  const signUpButton = () => {
    dispatch(signUp(user_name, email, password));
    setUserName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <Home />
      <section class="popup">
        <div class="popup-inner">
          <div class="popup-preview">
            <div class="popup-inner">
              <img src={CrossX} class="close" />
              <div class="input">
                <input
                  type="email"
                  class="form-control"
                  onChange={inputUserName}
                  placeholder="Enter User Name"
                  value={user_name}
                  required
                />
                <input
                  type="email"
                  class="form-control"
                  onChange={inputEmail}
                  placeholder="Enter email"
                  value={email}
                  required
                />
                <br />
                <input
                  type="password"
                  class="form-control"
                  onChange={inputPassword}
                  placeholder="Password"
                  value={password}
                  required
                />
              </div>

              <button class="button" onClick={signUpButton}>
                SIGN UP
              </button>
              <p>
                Already a Member?{" "}
                <a href="/signin">
                  <u>Sign In.</u>
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="subtotal">
          <span class="subtotal-test">Subtotal:</span>
          <span class="subtotal-price">$1000</span>
        </div>
        <button>Check Out</button>
      </footer>
    </>
  );
};

export default SignUp;
