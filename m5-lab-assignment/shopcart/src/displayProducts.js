import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DisplayProducts = ({ products, onIncrement, onDecrement }) => {
  const [show, setShow] = useState(false);
  const [showImge, setShowImge] = useState({});
  const [sortType, setSortType] = useState("normal"); // State for dropdown

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setShow(true);
    setShowImge(product);
  };

  // Sort handler using a switch statement
  const handleSort = (e) => {
    setSortType(e.target.value);
  };

  // Clone array and sort based on selected option
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortType) {
      case "lowest":
        return a.price - b.price;
      case "highest":
        return b.price - a.price;
      case "default":
      default:
        return a.id - b.id;
    }
  });

  return (
    <div className="container mt-4">
      {/* Sort Dropdown */}
      <div className="d-flex justify-content-center align-items-center mb-4">
        <label className="me-2 fw-bold">Sort Price By:</label>
        <select className="form-select w-auto" onChange={handleSort} value={sortType}>
          <option value="default">Default</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>

      {sortedProducts.map(product => (
        <div key={product.id} className="d-flex align-items-center border-bottom p-3">
          <div className="me-4" style={{ width: '150px' }}>
            {/* Added price display next to description */}
            <p className="mb-2 fw-bold">
              {product.desc} <span className="text-danger fw-normal">${product.price}</span>
            </p>
            <img 
              src={product.image} 
              alt={product.desc} 
              width="100" 
              onClick={() => handleShow(product)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="d-flex align-items-center">
            <Button variant="secondary" className="me-2" onClick={() => onIncrement(product)}>
              <FontAwesomeIcon icon={faPlusCircle} />
            </Button>
            <Button variant="secondary" className="me-3" onClick={() => onDecrement(product)}>
              <FontAwesomeIcon icon={faMinusCircle} />
            </Button>
            <div className="text-center">
              <div className="text-muted" style={{ fontSize: '0.8rem' }}>Quantity</div>
              <span className="border p-2 d-inline-block text-center bg-light" style={{ width: '40px' }}>
                {product.value}
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* Lightbox / Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showImge.desc}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src={showImge.image} width="350" alt={showImge.desc} className="mx-5 mb-3" />
          <p><span className="text-dark fw-bold">Ratings:</span> {showImge.ratings}/5</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DisplayProducts;