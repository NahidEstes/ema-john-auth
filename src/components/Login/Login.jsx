import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const [success, setSuccess] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        setSuccess("successfully log in");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogIn}>
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
          <input type="submit" name="submit" value="Login" />
        </div>
      </form>
      <p>
        <small>
          New to Ema-John? <Link to="/signup">Signup</Link>
        </small>
      </p>
      <p>{success}</p>
    </div>
  );
};

export default Login;
