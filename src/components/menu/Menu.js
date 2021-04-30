import React from "react";
import { Icon, Navbar } from "react-materialize";
import { Link } from "react-router-dom";
// import logo from "./../../img/logo3.png";

const Menu = () => {
  return (
    <Navbar
      alignLinks="right"
      brand={
        <div className="brand-logo">
          <Icon>house</Icon>
          {/*<img src={logo} alt="logo"></img>*/}
        </div>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      style={{ backgroundColor: "#26a69a" }}
    >
      <Link to={"/"}>Calendrier</Link>
      <Link to={"/reservations"}>Réservations</Link>
    </Navbar>
  );
};

export default Menu;
