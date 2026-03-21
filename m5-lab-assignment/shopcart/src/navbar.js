import React from "react";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ totalQuantity }) => {
  return (
    <div className="bg-info text-white p-3 d-flex justify-content-between align-items-center">
      <Link to="/" className="text-white text-decoration-none">
        <h2>Shop 2 React</h2>
      </Link>
      <Link to="/cart" className="text-white text-decoration-none">
        <div>
          <FontAwesomeIcon icon={faShoppingCart} /> {totalQuantity} items 
        </div>
      </Link>
    </div>
  );
};

export default Navbar;