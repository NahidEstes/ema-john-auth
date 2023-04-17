import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
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
              Welcome{user.email} <button onClick={logOut}>SignOut</button>
            </span>
          </span>
        )}
      </div>
      button
    </nav>
  );
};

export default Header;
