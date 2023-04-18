import React, { useContext, useState } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [success, setSuccess] = useState("");

  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        setSuccess(result.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        {user && (
          <span>
            <span style={{ color: "white" }}>
              <button onClick={handleLogOut}>SignOut</button>
            </span>
          </span>
        )}
      </div>
      <p>{success}</p>
    </nav>
  );
};

export default Header;
