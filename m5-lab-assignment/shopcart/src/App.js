import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Import your separated components and data
import { productsData } from "./products";
import Navbar from "./navbar";
import DisplayProducts from "./displayProducts";
import Cart from "./cart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData
    };
  }

  // Handlers for Add and Subtract buttons
  handleIncrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].value++;
    this.setState({ products });
  };

  handleDecrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    if (products[index].value > 0) {
      products[index].value--;
    }
    this.setState({ products });
  };

  render() {
    const totalQuantity = this.state.products
      .map(item => item.value)
      .reduce((acc, curr) => acc + curr, 0); 

    return (
      <Router>
        <div className="App">
          {/* Navbar is outside routes so it always shows */}
          <Navbar totalQuantity={totalQuantity} />
          
          <Routes>
            <Route 
              path="/" 
              element={
                <DisplayProducts 
                  products={this.state.products} 
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              } 
            />
            <Route 
              path="/cart" 
              element={<Cart products={this.state.products} />} 
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;