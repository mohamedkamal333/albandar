import React from 'react';
import GallarySlide from './gallary_slider/gallar_slider';
import { useTranslation} from "react-i18next";
import "./gallary.scss";


function Gallary() {
  const {t} = useTranslation();
  document.title = t("gallary-addr");
  return (
    <GallarySlide/>
  )
}

export default Gallary;
