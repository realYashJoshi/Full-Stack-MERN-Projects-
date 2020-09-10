import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Header = (props) => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header_logo"
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_search_input" />
        <SearchIcon className="header_search_icon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_line_one">Hello Guest</span>
          <span className="header_option_line_two">Sign in</span>
        </div>

        <div className="header_option">
          <span className="header_option_line_one">Returns</span>
          <span className="header_option_line_two">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_option_line_one">Your</span>
          <span className="header_option_line_two">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_option_basket">
            <ShoppingBasketIcon />
            <span className="header_option_basket_count">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Header;
