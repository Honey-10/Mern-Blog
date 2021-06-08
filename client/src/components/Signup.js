import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import signupimg from "../images/signup-image.jpg";
const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
    } else {
      window.alert("Register Sucessfull");
      history.push("/Login");
    }
  };

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
                    <i class="fas fa-users"></i>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={user.name}
                    onChange={handleInputs}
                  />
                </div>
                <div class="form-group">
                  <label for="email">
                    <i class="fas fa-envelope-open-text"></i>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={user.email}
                    onChange={handleInputs}
                  />
                </div>
                <div class="form-group">
                  <label for="phone">
                    <i class="fas fa-phone"></i>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="phone"
                    placeholder="Phone No"
                    value={user.phone}
                    onChange={handleInputs}
                  />
                </div>
                <div class="form-group">
                  <label for="work">
                    <i class="fas fa-briefcase"></i>
                  </label>
                  <input
                    id="work"
                    name="work"
                    type="work"
                    placeholder="Work"
                    value={user.work}
                    onChange={handleInputs}
                  />
                </div>
                <div class="form-group">
                  <label for="pass">
                    <i class="fas fa-lock"></i>
                  </label>
                  <input
                    id="pass"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleInputs}
                  />
                </div>
                <div class="form-group">
                  <label for="re-pass">
                    <i class="fas fa-lock"></i>
                  </label>
                  <input
                    id="re_pass"
                    name="cpassword"
                    type="password"
                    placeholder="Repeat you"
                    value={user.cpassword}
                    onChange={handleInputs}
                  />
                </div>
                <div class="form-group">
                  <input
                    id="agree-term"
                    class="agree-term"
                    name="agree-term"
                    type="checkbox"
                  />
                </div>
                <div class="form-group form-button">
                  <input
                    id="signup"
                    class="form-submit"
                    name="signup"
                    type="submit"
                    value="Register"
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>
            <div class="signup-image">
              <figure>
                <img src={signupimg} alt="sing up image" />
              </figure>
              <NavLink class="signup-image-link" to="/Login">
                I am already member
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
