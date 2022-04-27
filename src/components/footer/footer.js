import React from "react";
import logo from "./img/logo.jpeg";
import { useTranslation } from "react-i18next";
import "./footer.scss";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="up-pa">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="message-loca">
            <div>
              <a href="https://maps.google.com/?q=23.664843,57.846519" target="_blank">
              <i className="fa-solid fa-location-dot"></i>
              <span>{t("navbarr.locat")}</span>
              </a>
            </div>
            <div>
              <p>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:vipalbandar@gmail.com">vipalbandar@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="social">
            <div className="icons">
              <a href="#" target="_blank">
                <div className="insta" title="Go To instagram">
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </a>

              <a href="#" target="_blank">
                <div className="twitter" title="Go To Twitter">
                  <i className="fa-brands fa-twitter"></i>
                </div>
              </a>

              <a href="#" target="_blank">
                <div className="facebook" title="Go To Facebook">
                  <i className="fa-brands fa-facebook"></i>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <div className="container">
        <p> {t("footer.text")} </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
