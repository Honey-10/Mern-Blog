import React, { useState } from "react";
import signinimg from "../images/signin-image.jpg";
import { NavLink, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid ID");
    } else {
      window.alert("Sucessfull Login");
      history.push("/");
    }
  };

  return (
    <>
      <section class="sign-in">
        <div class="container">
          <div class="signin-content">
            <div class="signin-image">
              <figure>
                <img src={signinimg} alt="sing up image" />
              </figure>
              <NavLink class="signup-image-link" to="/Signup">
                Create an account
              </NavLink>
            </div>
            <div class="signin-form">
              <h2 class="form-title">Sign up</h2>
              <form id="login-form" class="register-form" method="POST">
                <div class="form-group">
                  <label for="your_name">
                    <i class="fas fa-users"></i>
                  </label>{" "}
                  <input
                    id="your_name"
                    name="email"
                    type="text"
                    placeholder="Your Name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="your_pass">
                    <i class="fas fa-lock"></i>
                  </label>
                  <input
                    id="your_pass"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <input
                    id="remember-me"
                    class="agree-term"
                    name="remember-me"
                    type="checkbox"
                  />{" "}
                  <label class="label-agree-term" for="remember-me">
                    Remember me
                  </label>
                </div>
                <div class="form-group form-button">
                  <input
                    id="signin"
                    class="form-submit"
                    name="signin"
                    type="submit"
                    value="Log in"
                    onClick={LoginUser}
                  />
                </div>
              </form>
              <div class="social-login">
                <span class="social-label">Or login with</span>
                <ul class="socials">
                  <li>&nbsp;</li>
                  <li>&nbsp;</li>
                  <li>&nbsp;</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
