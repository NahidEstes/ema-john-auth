import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });

    if (password !== confirm) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("password must be 6 characters");
    }
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="password">Email</label>
          <br />
          <input type="email" name="email" required />
        </div>
        <br />
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" required /> <br />
        </div>
        <br />
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <br />
          <input type="password" name="confirm" />
        </div>
        <br />
        <div className="form-control">
          <input type="submit" name="submit" value="Signup" />
        </div>
      </form>
      <p>
        <small>
          Already have an account? <Link to="/login">Login</Link>
        </small>
      </p>
      <p>{error}</p>
    </div>
  );
};

export default Signup;
