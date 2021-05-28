import React from "react";
import signinimg from "../images/signin-image.jpg";

const Login = () => {
  return (
    <>
      <section class="sign-in">
        <div class="container">
          <div class="signin-content">
            <div class="signin-image">
              <figure>
                <img src={signinimg} alt="sing up image" />
              </figure>
              <a class="signup-image-link" href="#">
                Create an account
              </a>
            </div>
            <div class="signin-form">
              <h2 class="form-title">Sign up</h2>
              <form id="login-form" class="register-form" method="POST">
                <div class="form-group">
                  <label for="your_name"></label>{" "}
                  <input
                    id="your_name"
                    name="your_name"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div class="form-group">
                  <label for="your_pass"></label>{" "}
                  <input
                    id="your_pass"
                    name="your_pass"
                    type="password"
                    placeholder="Password"
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
