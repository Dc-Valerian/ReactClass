import "./Header.css";
import logo from "../../images/classlogo.png";
import { RxPerson } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { MdCancel } from "react-icons/md";

const Header = () => {
  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };

  return (
    <div className="header">
      <div className="headerWrapper">
        {/* Image  */}
        <div className="logo">
          <img src={logo} alt="logo_image" />
        </div>
        {/* Image END */}

        {/* Navlink start */}
        <div className="navlinks">
          <a href="/" className="links">
            Home
          </a>
          <a href="/shop" className="links">
            Shop
          </a>
          <a href="" className="links">
            About
          </a>
          <a href="" className="links">
            Contact Us
          </a>
        </div>
        {/* Navlink end */}

        {show ? (
          <div className="flex justify-end">
          <div className="button" onClick={Toggle}>
            <MdCancel />
          </div>
          </div>
        ) : (
          <div className="button" onClick={Toggle}>
            <AiOutlineMenu />
          </div>
        )}

        {show ? (
          <div className="mobile-container">
          <div className="mobile-navlinks">
            <a href="/" className="links">
              Home
            </a>
            <a href="/shop" className="links">
              Shop
            </a>
            <a href="" className="links">
              About
            </a>
            <a href="" className="links">
              Contact
            </a>
          </div>
          </div>
        ) : null}

        {/* Icons Starts */}
        <div className="iconHolder">
          <div className="icons">
            <RxPerson />
          </div>
          <div className="icons">
            <IoSearch />
          </div>
          <div className="icons">
            <FaRegHeart />
          </div>
          <div className="icons">
            <IoCart />
          </div>
        </div>
        {/* Icons End */}
      </div>
    </div>
  );
};

export default Header;
