import React from "react";
import { useTranslation} from "react-i18next";
import logo from "./img/logo.jpeg";
import "./bookPage.scss";

function BookPage() {
  const {t} = useTranslation();
  document.title = t("book-addr");
    return (
        <section className="book-page">
            <div className="container">
                <div className="title-book">
                    <p className="first-para">{t("aboutUs.title")}</p>
                    <p>{t("aboutUs.text")}</p>
                    <h4> {t("bookPage.reseve")} </h4>
                    <h3>{t("bookPage.rates")}</h3>
                    <ul>
                        <li> {t("bookPage.one")} </li>
                        <li> {t("bookPage.tow")} </li>
                        <li> {t("bookPage.three")} </li>
                        <li> {t("bookPage.four")} </li>
                    </ul>
                    <div className="datal-note">
                    <p>{t("bookPage.detal-note")}</p>
                </div>
                </div>
                <div className="detal">
                    <h3> {t("bookPage.details-title")} </h3>
                    <form>

                        <div className="d-flex detal-input">
                            <div>
                                <label>{t("bookPage.detal-name")}</label>
                                <input type="name" name="name" required/>
                            </div>
                            <div>
                                <label>{t("bookPage.detal-email")}</label>
                                <input type="email" name="email" required/>
                            </div>
                            <div>
                                <label>{t("bookPage.detal-phone")}</label>
                                <input type="phone" name="phone" required/>
                            </div>
                            <div>
                                <label>{t("bookPage.detal-country")}</label>
                                <input type="country" name="country"/>
                            </div>
                        </div>

                        <div className="d-flex detal-date">
                            <div>
                                <label> {t("bookPage.detal-check-in")} </label>
                                <input type="date" name="date" required/>
                            </div>
                            <div>
                                <label> {t("bookPage.detal-check-out")} </label>
                                <input type="date" name="date" required/>
                            </div>
                        </div>

                <div className="btn-book">
                    <button>{t("bookPage.btn-book-now")}</button>
                </div>
                    </form>
                </div>
                <div className="po-logo">
                <img src={logo} alt="logo"/>
                </div>
            </div>
        </section>
    )
}

export default BookPage