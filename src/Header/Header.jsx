import React from "react";
import "./header.css";
export default function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <h3>Md-Ashfak</h3>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </nav>

        <div className="btn_nav">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </header>
    </>
  );
}
