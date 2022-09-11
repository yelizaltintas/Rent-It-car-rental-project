import React, {Component} from "react";
import logo from "./images/car.png";
import Alert from 'react-bootstrap/Alert';

  class Navigation extends Component {
    render() {
      return (
        <div className = "navBar">

          <header className="head">
            <a href="#" className="logo">
                <img src= {logo} alt=""/> 
            </a>
            <div className="bx bx-menu" id="menu-icon"></div>

            <ul className="navbar">
                <li> <a href="#home">Home</a> </li>
                <li> <a href="#ride">Sürüş </a> </li>
                <li> <a href="#services">Servis</a> </li>
                <li> <a href="#about">Hakkımızda</a> </li>
            </ul>
            <div className="header-btn">
                <a href="#" className="sign-up">Sepetim</a>
                <a href="#" className="sign-in">Giriş Yapın/Kayıt Ol</a>
            </div>
        </header>

        </div>
      );
      }
    }
    
export default Navigation;