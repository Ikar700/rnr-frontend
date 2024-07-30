// Header.js
import React, { useState } from 'react';
import '../App.css';
import { FiShoppingCart, FiUser, FiHelpCircle } from 'react-icons/fi';
import { BsSearch } from 'react-icons/bs';
import Logo from '../img_files/RNR Logo.jpg';

const Header = () => {
  const cartItemCount = 3; // Replace with your actual cart item count logic
  const [showCartTable, setShowCartTable] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);

  return (
    <div className="header-top-strip">
      <div className="header-container d-flex justify-content-between align-center">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="RNR Logo" />
          </a>
        </div>
        <div className="search-box-container">
          <div className="input-group py-3">
            <input 
              type="text"
              className="form-control search-box"
              placeholder="Search Product Here....."
              aria-label="Search Product Here....."
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              <BsSearch />
            </span>
          </div>
        </div>
        <div className="icons-container">
          <FiHelpCircle className="icon" />
          <div
            className="cart-icon icon-container"
            onMouseEnter={() => setShowCartTable(true)}
            onMouseLeave={() => setShowCartTable(false)}
          >
            <FiShoppingCart className="icon" />
            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
            {showCartTable && (
              <div className="cart-table">
                <table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Replace with your actual cart items */}
                    <tr>
                      <td>Item 1</td>
                      <td>1</td>
                      <td>$10.00</td>
                    </tr>
                    <tr>
                      <td>Item 2</td>
                      <td>2</td>
                      <td>$20.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div
            className="icon-container"
            onMouseEnter={() => setShowUserProfile(true)}
            onMouseLeave={() => setShowUserProfile(false)}
          >
            <FiUser className="icon" />
            {showUserProfile && (
              <div className="user-profile">
                <table>
                  <thead>
                    <tr>
                      <th colSpan="2">User Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="2">John Doe</td>
                    </tr>
                    <tr>
                      <td><a href="/profile">Profile</a></td>
                      <td><a href="/orders">Orders</a></td>
                    </tr>
                    <tr>
                      <td><a href="/settings">Settings</a></td>
                      <td><a href="/logout">Logout</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
