import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // 스타일 파일이 없을 경우 주석 처리 가능

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);