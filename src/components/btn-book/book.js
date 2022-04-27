import React from "react";
import { useTranslation} from "react-i18next";
import "./book.scss";
function BookNow() {
  const {t} = useTranslation();

    return (
        <div className="book-now">
            <div className="container">
                <button><a href="/bookPage">{t("bookBtn")}</a></button>
            </div>
        </div>
    )
}

export default BookNow