import React from "react";
import { useTranslation} from "react-i18next";
import "./nav.scss";
import logo from "./img/logo.jpeg";
import Langs from "./langs";

function NavTop() {
  const {t} = useTranslation();
    return (

      <div className="par-nav-top">
        <div className="container">
        <div className="lan-an-loca">
          <div className="pa-la">
          <div className="social">
                    <div className="icons">
          <a
            href="#"
            target="_blank"
          >
            <div className="insta" title="Go To instagram">
              <i className="fa-brands fa-instagram"></i>
            </div>
          </a>

          <a
            href="#"
            target="_blank"
          >
            <div className="twitter" title="Go To Twitter">
              <i className="fa-brands fa-twitter"></i>
            </div>
          </a>

          <a
            href="#"
            target="_blank"
          >
            <div className="facebook" title="Go To Facebook">
              <i className="fa-brands fa-facebook"></i>
            </div>
          </a>

        </div>
                    </div>
            <div className="get-loca">
            <a href="https://maps.google.com/?q=23.664843,57.846519" target="_blank">
              <i className="fa-solid fa-location-dot"></i>
              <span>{t("navbarr.locat")}</span>
              </a>
            </div>
            
            <div className="ch-lang">
            <Langs/>
            </div>
          </div>
        </div>
        </div>

<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <img className="navbar-brand" src={logo} alt="not available"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">{t("navbarr.home")}</a>
        </li>
        <li className="nav-item border-add" style={{borderLeft: "1px solid #999", borderRight: "1px solid #999"}}>
          <a className="nav-link" href="/gallary">{t("navbarr.gallary")}</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/contact">{t("navbarr.contact")}</a>
        </li>

      </ul>

    </div>
  </div>
</nav>
      </div>

    )
}

export default NavTop