import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing

const Cart = ({ products }) => {
  // Filter products that have 1 or more quantities
  const cartItems = products.filter(product => product.value > 0);

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Your Cart Items</h3>
      {cartItems.length === 0 ? (
        <React.Fragment>
          <p>There are 0 items in your cart.</p>
          <Link to="/">
            <button className="btn btn-success mt-2">Continue Shop</button>
          </Link>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {cartItems.map(product => (
            <div key={product.id} className="d-flex align-items-center border-bottom p-3">
              <div className="me-4" style={{ width: '150px' }}>
                <img src={product.image} alt={product.desc} width="80" />
                <p className="mt-2 mb-0 text-muted">{product.desc}</p>
              </div>
              <div>
                <p className="mb-0 fw-bold">Quantity: {product.value}</p>
              </div>
            </div>
          ))}
          <Link to="/signin">
            <button className="btn btn-primary mt-4">Check Out</button>
          </Link>
        </React.Fragment>
      )}
    </div>
  );
};

export default Cart;