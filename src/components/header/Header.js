import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

export default class Header extends React.Component {
  constructor() {
    super();

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    if (document.body.clientWidth < 992) {
      const nav = document.querySelector("nav");
      nav.classList.toggle("responsiveClass");
    }
  };

  render() {
    return (
      <header className="row">
        <div className="bann col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12">
          <p className="banniere">
            Visages et couleurs
            <span>
              <label
                className="bouton"
                htmlFor="toggle"
                style={{ fontSize: 30 + "px" }}
                onClick={this.toggleMenu}
              >
                &#9776;
              </label>
            </span>
          </p>
        </div>
        <nav className="menu col-xl-2 col-lg-2 ml-auto">
          <div className="menuResponsive">
            <li>
              <Link to="/" onClick={this.toggleMenu}>
                {" "}
                {"Accueil"}{" "}
              </Link>
            </li>
            <li>
              <Link to="/peintures" onClick={this.toggleMenu}>
                {" "}
                {"Peintures"}{" "}
              </Link>
            </li>
            <li>
              <Link to="/sculptures" onClick={this.toggleMenu}>
                {" "}
                {"Sculptures"}{" "}
              </Link>
            </li>
            <li>
              <Link to="/evenements" onClick={this.toggleMenu}>
                {" "}
                {"Evenements"}{" "}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={this.toggleMenu}>
                {" "}
                {"Contact"}{" "}
              </Link>
            </li>
          </div>
        </nav>
      </header>
    );
  }
}
