import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [buttonText, setButtonText] = useState("Login");
  const onlineStatus=useOnlineStatus();
  return (
    <div className="flex">
      <div className="header-logo">
        <img
          className="w-36"
          src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-food-delivery-logo-design-png-image_5392527.jpg"
          alt="App Logo"
        />
      </div>
      <div>
        <ul className="list-item">
          <p>Check status : {onlineStatus?"🟢":"❌"}</p>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <button
            className="login-btn"
            onClick={() =>
              buttonText === "Login"
                ? setButtonText("Logout")
                : setButtonText("Login")
            }
          >
            {buttonText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
