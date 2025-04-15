import css from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={`container ${css.footerDiv}`}>
        <div className={css.mainDiv}>
          <div className={css.logoDiv}>
            <h2 className={css.h2}>Fly4est</h2>
            <div className={css.divLi}>
              <li className={css.footerItemApps}>
                <a
                  className={css.link}
                  href="https://www.facebook.com/goITclub/"
                  target="_blank"
                >
                  <FaYoutube className={css.icon} size={30} />
                </a>
              </li>
              <li className={css.footerItemApps}>
                <a
                  className={css.link}
                  href="https://www.facebook.com/goITclub/"
                  target="_blank"
                >
                  <FaInstagram className={css.icon} size={30} />
                </a>
              </li>
              <li className={css.footerItemApps}>
                <a
                  className={css.link}
                  href="https://www.facebook.com/goITclub/"
                  target="_blank"
                >
                  <FaFacebook className={css.icon} size={30} />
                </a>
              </li>
            </div>
          </div>
          <div>
            <p className={css.p}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae quo totam quos ad, maiores autem?
            </p>
          </div>
          <div className={css.divTel}>
            <a className={css.appsTel} href="tel:+380684439426" target="_blank">
              +380(68)443-94-26
            </a>
          </div>
        </div>
        <div className={css.links}>
          <ul className={css.ulNav}>
            <li className={css.liNav}>
              <a className={css.aNav} href="#about_me">
                About me
              </a>
            </li>
            <li className={css.liNav}>
              <a className={css.aNav} href="#benefits">
                Benefits
              </a>
            </li>
            <li className={css.liNav}>
              <a className={css.aNav} href="#options">
                Options
              </a>
            </li>
            <li className={css.liNav}>
              <a className={css.aNav} href="#faq">
                FAQ
              </a>
            </li>
          </ul>
          <div className={css.secondColumnDiv}>
            <p className={css.secondColumnP}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, nostrum.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
