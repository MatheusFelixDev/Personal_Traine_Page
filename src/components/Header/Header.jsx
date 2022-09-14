import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" style={{width: "10rem", height: "3rem"}}/>
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={() => setMenuOpened(false)}>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="home"
              smooth={true}
            >
              Início
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              smooth={true}
            >
              Programas
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link onClick={() => setMenuOpened(false)} to="whyUs" smooth={true}>
              Sobre
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link onClick={() => setMenuOpened(false)} to="plans" smooth={true}>
              Planos
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              smooth={true}
            >
              Depoimentos
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
