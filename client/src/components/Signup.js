import React from "react";
import { NavLink } from "react-router-dom";
import signupimg from "../images/signup-image.jpg";
const Signup = () => {
  return (
    <>
      <section class="signup">
        <div class="container">
          <div class="signup-content">
            <div class="signup-form">
              <h2 class="form-title">Sign up</h2>
              <form method="POST" id="register-form" class="register-form">
                <div class="form-group">
                  <label for="name">
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div class="form-group">
                  <label for="email">
                    <i class="zmdi zmdi-email"></i>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group">
                  <label for="pass">
                    <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    id="pass"
                    name="pass"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group">
                  <label for="re-pass">
                    <i class="zmdi zmdi-lock-outline"></i>
                  </label>
                  <input
                    id="re_pass"
                    name="re_pass"
                    type="password"
                    placeholder="Repeat your password"
                  />
                </div>
                <div class="form-group">
                  <input
                    id="agree-term"
                    class="agree-term"
                    name="agree-term"
                    type="checkbox"
                  />
                  <label for="agree-term" class="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    I agree all statements in{" "}
                    <a href="#" class="term-service">
                      Terms of service
                    </a>
                  </label>
                </div>
                <div class="form-group form-button">
                  <input
                    id="signup"
                    class="form-submit"
                    name="signup"
                    type="submit"
                    value="Register"
                  />
                </div>
              </form>
            </div>
            <div class="signup-image">
              <figure>
                <img src={signupimg} alt="sing up image" />
              </figure>
              <a class="signup-image-link" href="#">
                I am already member
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
