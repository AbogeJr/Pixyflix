import React from "react";
import './navbar.css';
import {Link} from "react-router-dom";

//Images
import Logo from "../../Assets/logo.png";
import searchIcon from "../../Assets/search-icon.png";
import cartIcon from "../../Assets/shopping-cart 1.png"

const Navbar = () =>{
    return(
        <div className="container-fluid navbar-container">
          <div className="container">
            <nav class="navbar navbar-expand-lg ">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  <img src={Logo} alt="Dobiri-Logo" className="img-fluid"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                  <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li class="nav-item">
                      <Link class="navbar-link" aria-current="page" href="#">Create</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="navbar-link active" href="#">Gallery</Link>
                    </li>
                    <li class="nav-item dropdown">
                      <Link class="navbar-link active" href="#">Pricing</Link>
                    </li>
                  </ul>
                  <div className="linkContainer">
                    <button className="signInButton">Sign In</button>
                  </div>
                </div>
              </div>
            </nav>
          </div>          
        </div>
      );
}

export default Navbar;