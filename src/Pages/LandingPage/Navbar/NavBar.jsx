import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <div className="wraper">
      <nav>
        <div className="navbar">
          <div className="logo">
            <h1>SolutionM4</h1>
          </div>
          <ul>
            <li><a href="#About">About</a></li>
            <li><a href="#feature">Feature</a></li>
            <li><a href="#Professionals">Company</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            
          </ul>
          <div className="nav-icons">
            <div className="social">
              <i class="bi bi-facebook"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-skype"></i>
            </div>

            <button>
              <i class="bi bi-rocket"></i>
              Get Started
            </button>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
}
