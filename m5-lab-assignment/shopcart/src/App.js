import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ totalQuantity }) => {
  return (
    <div className="bg-info text-white p-3 d-flex justify-content-between align-items-center">
      <h2>Shop to React</h2> 
      <div>
        <FontAwesomeIcon icon={faShoppingCart} /> {totalQuantity} items 
      </div>
    </div>
  );
};

const Product = ({ product }) => {
  return (
    <div className="d-flex align-items-center border-bottom p-3">
      <div className="me-4" style={{ width: '150px' }}>
        <p className="mb-2 fw-bold">{product.desc}</p>
        <img src={product.image} alt={product.desc} width="100" />
      </div>
      <div className="d-flex align-items-center">
        <span className="border p-2 me-2 d-inline-block text-center" style={{ width: '40px' }}>
          {product.value}
        </span>
        <span>quantity</span>
      </div>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, image: './products/cologne.jpg', desc: 'Unisex Cologne', value: 0 },
        { id: 2, image: './products/iwatch.jpg', desc: 'Apple iWatch', value: 0 },
        { id: 3, image: './products/mug.jpg', desc: 'Unique Mug', value: 0 },
        { id: 4, image: './products/wallet.jpg', desc: 'Mens Wallet', value: 0 }
      ]
    };
  }

  render() {
    const totalQuantity = this.state.products
      .map(item => item.value)
      .reduce((acc, curr) => acc + curr, 0); 

    return (
      <div className="App">
        <Navbar totalQuantity={totalQuantity} />
        
        <div className="container mt-4">
          {this.state.products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;