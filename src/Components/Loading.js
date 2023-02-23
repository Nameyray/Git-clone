import React from "react";

import Loading_icon from "../assets/Loading_icon.gif";
import './../App.css';

const Loading = () => (
  <div className="loading">
    <img src={Loading_icon} alt="loading" />
  </div>
);

export default Loading;