import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { useNavigate } from 'react-router-dom';

function SignIn({ setUserName }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const responseFacebook = (response) => {
    // If the login is successful, Facebook returns an accessToken
    if (response.accessToken) {
      setUserName(response.name); // Save name to App.js state
      navigate('/checkout');      // Redirect to the Check Out screen
    }
  };

  return (
    <div className="container mt-4">
      <h2>Sign In</h2>
      <div className="card p-4 mx-auto mt-4" style={{ maxWidth: '400px' }}>
        <p>Please login using one of the following:</p>
        
        <form className="mb-4 text-start">
          <div className="form-group mb-2">
            <label>Name:</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Your name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label>Email:</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="Your Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="button" className="btn btn-success">Login</button>
        </form>

        <FacebookLogin
          appId="979574514703685" // You can leave this as a placeholder for the assignment or add a real App ID
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          textButton="LOGIN WITH FACEBOOK"
          cssClass="btn btn-primary text-white w-100"
          icon="fa-facebook"
        />
      </div>
    </div>
  );
}

export default SignIn;