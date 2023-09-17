import React from "react";
import { useState } from "react";



export default function Authenticate({ token, username }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
      });

      const result = await response.json();
      console.log(result);
      if (result.success) {
        setSuccessMessage(result.message);
        setUsername(result.data.username);

      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="form-container">
        <h2>Authenticate</h2>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {username && <p>Logged in as: {username}</p>}
      <button className="form-submit-button" onClick={handleClick}>Authenticate Token</button>
    </div>
  );
}