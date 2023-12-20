import React from "react";
import ReactDOM from "react-dom/client";

// Header:
//   Logo
//   Menu
//     Home
//     About us
//     Contact us
// Body:
//   Card container
// Footer:
//   Copyright
//   Email
//   Links
//   Address

const Menu = () => {
  return (
    <div className="navbarContainer">
      <ul className="navBar">
        <li>Home</li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div className="logoContainer">
      <img
        className="logo"
        src="https://s3.amazonaws.com/ionic-marketplace/food-ordering-restaurant-delivery-app/icon.png"
      />
      <Menu />
    </div>
  );
};

const App = () => (
  <div className="headerContainer">
    <Header />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
