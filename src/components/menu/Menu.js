import React, { useContext } from "react";
import { Icon, Navbar, Switch } from "react-materialize";
import { Link } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
// import logo from "./../../img/logo3.png";

const Menu = () => {
  const { period, setPeriod } = useContext(ThemeContext);

  return (
    <div id="menu-navbar">
      <Navbar
        alignLinks="right"
        brand={
          <div className="brand-logo">
            <Icon medium className="teal-text text-darken-3">
              house
            </Icon>
            <span>Camprieu</span>
            {/*<img src={logo} alt="logo"></img>*/}
          </div>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        style={{ backgroundColor: "#26a69a" }}
      >
        <Switch
          id="switch-theme"
          offLabel="Année"
          onChange={() => {
            setPeriod(period === "month" ? "year" : "month");
          }}
          onLabel="Mois"
          checked={period === "month"}
        />
        <Link to={"/"}>Calendrier</Link>
        <Link to={"/reservations"}>Réservations</Link>
      </Navbar>
    </div>
  );
};

export default Menu;
