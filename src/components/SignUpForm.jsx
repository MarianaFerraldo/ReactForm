import React from "react";
import { useState } from "react";


export default function SignUpForm( {setToken}) {
    const [username, setUsername ] = useState("");
    const [password, setPassword ] = useState("");
    const [error, setError] = useState(null);
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            if (username.length < 8) {
                setError("Username must be at least 8 characters long.");
                return;
              }
          const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }), 
          });
      
          const result = await response.json();
          console.log(result);
          if (result.success) {
        setToken(result.token);
      }
        } catch (error) {
          setError(error.message);
        }
      }
      
    return (
    <div className="form-container">
        <h2>Sign Up!</h2>
        {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                Username:{" "}
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>                </label>
                <label>
                Password: {" "} 
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </label><br></br>
                <button className="form-submit-button">Submit</button>
            </form>
    </div>
    )
  }
