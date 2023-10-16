import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../customHooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonText, setButtonText] = useState("Login");
  const onlineStatus=useOnlineStatus();
  const data=useContext(UserContext);
  const {logUser}=data;
  // console.log(logUser);
  
  const cart=useSelector((store)=> store.cart.items)

  return (
    <div className="flex items-center justify-between mx-10 font-medium">
      <div className="w-[200px]">
        <img
          className="w-28 "
          src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-food-delivery-logo-design-png-image_5392527.jpg"
          alt="App Logo"
        />
      </div>
      <div>
        <ul className="flex gap-12 ">
          <p>Check status : {onlineStatus?"🟢":"❌"}</p>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li className="text-lg font-semibold"><Link to="/cart">cart {cart.length} -items</Link></li>
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
