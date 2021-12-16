import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-logo">
          <img
            width="40"
            src="https://cdn-icons-png.flaticon.com/512/46/46646.png"
            alt=""
          />
        </div>
      </div>
      <div className="header-right">
        <div className="header-container">
          <div className="header-items">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Users</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
