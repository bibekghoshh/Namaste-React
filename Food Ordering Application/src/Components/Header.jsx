import React, { useState } from "react";

const Header = () => {
  const [buttonText, setButtonText] = useState("Login");
  return (
    <div className="header">
      <div className="header-logo">
        <img
          className="app-logo"
          src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-food-delivery-logo-design-png-image_5392527.jpg"
          alt="App Logo"
        />
      </div>
      <div>
        <ul className="list-item">
          <li>Home</li>
          <li>Contact us</li>
          <li>Sign In</li>
          <li>Cart</li>
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
