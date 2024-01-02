import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header.js";
import Body from "./components/Body/Body.js";

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

const App = () => (
  <div style={{ padding: "0px 80px", fontFamily: "cursive" }}>
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
