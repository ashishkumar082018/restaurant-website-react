import React from "react";
import cartIcon from "../../assets/cartIcon.svg";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
        <img style={{ width: 25 }} src={cartIcon} alt="Cart" />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
