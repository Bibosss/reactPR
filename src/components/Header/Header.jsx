import css from "./Header.module.css";
import logo from "../../img/Лого.png";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdRateReview } from "react-icons/md";

const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.headerDiv}>
        <a href="/" className={css.headerLogo}>
          <img className={css.imgHeader} src={logo} alt="logo" />
          <h2 className={css.h2HeaderLogo}>Fly4est</h2>
        </a>
        <div className={css.pages}>
          <NavLink to="/products" className={css.products}>
            Products
          </NavLink>
          <NavLink to="/addreview" className={css.reviews}>
            AddReview
            <MdRateReview size={27} />
          </NavLink>
        </div>
        <a href="/basket" className={css.basket}>
          <FaShoppingCart size={30} color="black" className={css.basketIcon} />
          <h2 className={css.h2Basket}>Basket</h2>
        </a>
      </div>
    </div>
  );
};

export default Header;
