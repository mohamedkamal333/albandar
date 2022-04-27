import React from 'react';
import { useTranslation} from "react-i18next";
import "./contact.scss";


function Contact() {
  const {t} = useTranslation();
  document.title = t("contact-addr");
  return (

    <section className='contact-us'>
      <div className='container'>
              <h2> {t("contact.title")} </h2>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='quest'>
              <form>
                <input type="text" name='text' placeholder={t("contact.place-name")} required/>
                <input type="email" name='email' placeholder={t("contact.place-email")} required/>
                <textarea placeholder={t("contact.place-message")}></textarea>
                 <button>{t("contact.btn-message")}</button>
              </form>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.8856940901164!2d57.848707685020266!3d23.664842984631623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe82058e2b485b80d!2zMjPCsDM5JzUzLjQiTiA1N8KwNTAnNDcuNSJF!5e1!3m2!1sar!2seg!4v1650929402228!5m2!1sar!2seg" ></iframe>
            <div>
              <p>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:vipalbandar@gmail.com">vipalbandar@gmail.com</a>
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
