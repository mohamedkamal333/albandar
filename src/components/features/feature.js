import React from "react";
import { useTranslation} from "react-i18next";
import logo from "./img/logo.jpeg";
import correct from "./img/correct.png";
import "./feature.scss";

function Features() {
    const {t} = useTranslation();
    return (
        <section className="features">
            <div className="container">
                <div className="title-top">
                    <h2>{t("features.title")} </h2>
                </div>
                <div className="row">


                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                            <div className="feat privet">
                            <h4>{t("features.lounge_facilities.title")} </h4>
                            <ul>
                                <li>
                                    <div className="d-flex">
                                        <div>
                                        <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.lounge_facilities.feat1")}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.lounge_facilities.feat2")}
                                        </div>
                                    </div></li>
                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.lounge_facilities.feat3")}
                                        </div>
                                    </div>
                                    </li>
                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.lounge_facilities.feat4")}
                                        </div>
                                    </div>
                                    </li>
                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.lounge_facilities.feat5")}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.lounge_facilities.feat6")}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.lounge_facilities.feat7")}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.lounge_facilities.feat8")}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.lounge_facilities.feat9")}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.lounge_facilities.feat10")}
                                        </div>
                                    </div></li>
                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.lounge_facilities.feat11")}
                                        </div>
                                    </div></li>
                            </ul>

                            <div className="po-img">
                                <img src={logo} alt="logo"/>
                            </div>

                        </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12">
                        <div className="row">

                        <div className="col-12">
                        
                        <div className="feat booal">
                            <h4>{t("features.basins.title")} </h4>
                            <ul>
                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.basins.feat1")}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.basins.feat2")}
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="feat club">
                            <h4>{t("features.entertainment.title")}</h4>
                            <ul>

                            <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.entertainment.feat1")}
                                        </div>
                                    </div>
                                </li>

                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.entertainment.feat2")}
                                        </div>
                                    </div>
                                </li>

                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.entertainment.feat3")}
                                        </div>
                                    </div>
                                </li>

                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.entertainment.feat4")}
                                        </div>
                                    </div>
                                </li>

                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.entertainment.feat5")}
                                        </div>
                                    </div>
                                </li>

                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.entertainment.feat6")}
                                        </div>
                                    </div>
                                </li>

                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.entertainment.feat7")}
                                        </div>
                                    </div>
                                </li>

                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.entertainment.feat8")}
                                        </div>
                                    </div>
                                </li>
                                
                            </ul>

                        </div>
                    </div>

                    <div className="col-12">
                        <div className="feat grills ">
                            <h4>{t("features.grills_attachments.title")} </h4>
                            <ul>
                            <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.grills_attachments.feat1")}
                                        </div>
                                    </div>
                                </li>

                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.grills_attachments.feat2")}
                                        </div>
                                    </div>
                                </li>

                                <li>
                                <div className="d-flex">
                                        <div>
                                          <img src={correct} alt="correct"/>
                                        </div>
                                        <div>
                                        {t("features.grills_attachments.feat3")}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="wifi">
                            <div>
                                {t("features.wifi")}
                            </div>
                            <div>
                            <i className="fa-solid fa-wifi"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="feat prices">
                            <h4> {t("features.prices.title")} </h4>
                            <ul>
                                <li>- {t("features.prices.feat1")}</li>
                                <li>- {t("features.prices.feat2")}</li>
                                <li>- {t("features.prices.feat3")}</li>
                                <li>- {t("features.prices.feat4")}</li>
                                <li>- {t("features.prices.feat5")}</li>

                            </ul>
                            
                            <p> {t("features.prices.security")} </p>
                            <p> {t("features.prices.note1")} </p>
                            <p> {t("features.prices.note2")} </p>
                        </div>
                    </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features