import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer_card">
          <ul>
            <h3>Contact Us</h3>
            <li>Privacy Policy</li>
            <li>Term & Condition</li>
            <li>Pricing</li>
            <li>Location</li>
          </ul>
        </div>

        <div className="footer_card">
          <ul>
            <h3>Coutomer Support</h3>
            <li>Order</li>
            <li>Cancel</li>
            <li>Return</li>
            <li>Replacement</li>
          </ul>
        </div>

        <div className="footer_card">
          <ul>
            <h3>Socilal Media</h3>
            <li>
              <i class="fa-brands fa-facebook"></i>Facebook
            </li>
            <li>
              <i class="fa-brands fa-instagram"></i>Instagram
            </li>
            <li>
              <i class="fa-brands fa-twitter"></i>Twiter
            </li>
            <li>
              <i class="fa-brands fa-youtube"></i>Youtube
            </li>
          </ul>
        </div>
        <div className="footer_card">
          <ul>
            <h3>Describe</h3>
            <p>
              vitae dolorem qui beatae veritatis voluptate atque omnis sint
              placeat sequi!
            </p>
            <div className="form">
              <input type="email" placeholder="Email" />
              <button>Submit</button>
            </div>
          </ul>
        </div>
      </footer>
    </>
  );
}
