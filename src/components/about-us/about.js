import React from "react";
import { useTranslation} from "react-i18next";

import "./about.scss";

function About() {
  const {t} = useTranslation();

    return (
        <div className="about-us">
            <div className="container">
                <div className="title-top">
                    <h2>{t("aboutUs.head")}</h2>
                    <h4>{t("aboutUs.title")}</h4>
                    <p>{t("aboutUs.text")}</p>
                </div>
            </div>
        </div>
    )
}

export default About