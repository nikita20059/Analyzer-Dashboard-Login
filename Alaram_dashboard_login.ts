

import React from "react";
import { motion } from "framer-motion";
import "./Login.css";
import img3 from "./10-Photoroom.png";
import img2 from "./6-Photoroom.png";
import img1 from "./logo.png";
import img4 from "./hp logo.png";

const Login = () => {
  return (
    <div className="login-wrapper">
      <motion.div
        className="login-box"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* LEFT PANEL */}
        <div className="left-panel">
          <div className="content">
              <img src={img4} className="card-logo-4" alt="logo" />
             <img src={img1} className="card-logo-1" alt="logo" />
            <img src={img2} className="card-logo" alt="logo" />
          </div>

          {/* Decorative circles */}
          <span className="circle big"></span>

          {/* ✅ IMAGE ON CIRCLE */}
          <span className="circle medium">
            <img src={img3} className="card-log1" alt="analyzer" />
          </span>

          <span className="circle small"></span>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <h2>Login</h2>
          <p className="sub-text">Welcome to Analyzer Dashboard</p>

          <div className="input-box">
            <span className="icon">👤</span>
            <input type="text" placeholder="Employee Number" />
          </div>

          <div className="input-box">
            <span className="icon">🔒</span>
            <input type="password" placeholder="Password" />
           
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="login-btn"
          >
            Login
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
