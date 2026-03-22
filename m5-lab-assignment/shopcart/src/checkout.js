import React from 'react';

function CheckOut({ userName }) {
  return (
    <div className="container mt-4 text-start">
      <h2>Check Out</h2>
      <hr />
      <div className="d-flex align-items-center mb-3 mt-4">
        <h3 className="text-success m-0">Welcome Back {userName}!</h3>
      </div>
      <p>Time to check out?</p>
    </div>
  );
}

export default CheckOut;