import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
// import reportWebVitals from './reportWebVitals'; -> 필요없으므로 주석해줌.

// React 18 에서는 지원하지 않음. -> import ReactDOM from 'react-dom'; 으로 해야 오류 안 뜸.
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
