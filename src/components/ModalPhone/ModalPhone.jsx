import { AiOutlineClose } from "react-icons/ai";
import css from "./ModalPhone.module.css";

const ModalPhone = ({ isOpen, onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div
      className={`${css.modalOverleyMenu} ${
        isOpen ? css.modalOverleyMenuIsOpen : ""
      }`}
    >
      <div className={css.mobileMenu}>
        <button className={css.button} onClick={onClose}>
          <AiOutlineClose className={css.icon} />
        </button>
        <ul className={css.ulNav}>
          <li className={css.liNav}>
            <a className={css.aNav} href="#about_me" onClick={handleLinkClick}>
              About me
            </a>
          </li>
          <li className={css.liNav}>
            <a className={css.aNav} href="#benefits" onClick={handleLinkClick}>
              Benefits
            </a>
          </li>
          <li className={css.liNav}>
            <a className={css.aNav} href="#reviews" onClick={handleLinkClick}>
              Reviews
            </a>
          </li>
          <li className={css.liNav}>
            <a className={css.aNav} href="#faq" onClick={handleLinkClick}>
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ModalPhone;
