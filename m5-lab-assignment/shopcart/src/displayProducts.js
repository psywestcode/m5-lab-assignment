import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DisplayProducts = ({ products, onIncrement, onDecrement }) => {
  const [show, setShow] = useState(false);
  const [showImge, setShowImge] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setShow(true);
    setShowImge(product);
  };

  return (
    <div className="container mt-4">
      {products.map(product => (
        <div key={product.id} className="d-flex align-items-center border-bottom p-3">
          <div className="me-4" style={{ width: '150px' }}>
            <p className="mb-2 fw-bold">{product.desc}</p>
            {/* Added onClick to trigger the Modal */}
            <img 
              src={product.image} 
              alt={product.desc} 
              width="100" 
              onClick={() => handleShow(product)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="d-flex align-items-center">
            {/* Add and Subtract Buttons */}
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

      {/* Lightbox / Modal Component */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showImge.desc}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={showImge.image}
            width="350"
            alt={showImge.desc}
            className="mx-5 mb-3"
          />
          <p><span className="text-dark fw-bold">Ratings:</span> {showImge.ratings}/5</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DisplayProducts;