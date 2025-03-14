import { useState } from "react";
import css from "./Hero.module.css"
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className={css.hero}>
            <div className={css.heroContainer}>
                <div className={css.heroNav}>
                    <button type="button" className={`${css.button} ${menuOpen ? css.activeMenu : ""}`} onClick={toggleMenu} >
                        <h2 className={`${css.h2} ${menuOpen ? css.activeText : ""}`}>Menu</h2>
                        <FaBars size={25} color="black" />
                    </button>
                    <div className={`${css.arrowLeft} ${menuOpen ? css.arrowHidden : ""}`}>
                        <AiOutlineArrowLeft size={30} color="black" />
                        <p className={css.arrowText}>
                            Click on me
                        </p>
                    </div>
                    <ul className={`${css.ulNav} ${menuOpen ? css.isOpen : ""}`}>
                        <li className={css.liNav}>
                            <a className={css.aNav} href="#about_me">About me</a>
                        </li>
                        <li className={css.liNav}>
                            <a className={css.aNav} href="#benefits">Benefits</a>
                        </li>
                        <li className={css.liNav}>
                            <a className={css.aNav} href="#options">Options</a>
                        </li>
                        <li className={css.liNav}>
                            <a className={css.aNav} href="#faq">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className={css.apps}>
                    <a className={css.appsTel} href="tel:+380684439426" target="_blank">+380(68)443-94-26</a>
                    <li className={css.heroItemApps}>
                        <a className={css.link} href="https://www.facebook.com/goITclub/" target="_blank">
                            <FaYoutube className={css.icon} size={30} />
                        </a>
                    </li>
                    <li className={css.heroItemApps}>
                        <a className={css.link} href="https://www.facebook.com/goITclub/" target="_blank">
                            <FaInstagram className={css.icon} size={30} />
                        </a>
                    </li>
                    <li className={css.heroItemApps}>
                        <a className={css.link} href="https://www.facebook.com/goITclub/" target="_blank">
                            <FaFacebook className={css.icon} size={30} />
                        </a>
                    </li>
                </div>
            </div>
        </div>
    )
}
    
export default Hero;