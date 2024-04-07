import React, { useState } from 'react';
import './Join.css';
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState(""); // Use one state to track the input value

  // Removed sendUser function since it's no longer needed

  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={logo} alt="logo" />
        <h1>Runigene Chat</h1>
        <input 
          type="text" 
          placeholder="Enter Your Name" 
          id="joinInput" 
          onChange={(e) => setName(e.target.value)} // Update `name` state on change
        />
        <Link 
          onClick={(event) => !name ? event.preventDefault() : null} 
          to={`/chat?Uname=${name}`}> {/* Use `name` for the URL parameter */}
          <button className="joinBtn">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
