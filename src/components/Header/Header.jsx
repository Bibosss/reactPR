import css from "./Header.module.css"
import logo from "../../img/Лого.png";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdRateReview } from "react-icons/md";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?type=${searchQuery.trim()}`)
        }
    }

    return (
        <div className={css.header}>
            <div className={css.headerDiv}>
                <a href="/" className={css.headerLogo}>
                    <img className={css.imgHeader} src={logo} alt="logo" />
                    <h2 className={css.h2HeaderLogo}>Fly4est</h2>
                </a>
                <form className={css.form} onSubmit={handleSearch}>
                    <label htmlFor="header-inp">Type</label>
                    <input
                        type="text"
                        id="header-inp"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} 
                    />
                    <button className={css.button} type="submit">🔍</button> 
                </form>
                <NavLink to="/addreview" className={css.reviews}>
                    AddReview
                    <MdRateReview size={27}/>
                </NavLink>
                <a href="/basket" className={css.basket}>
                    <FaShoppingCart size={30} color="black" className={css.basketIcon} />
                    <h2 className={css.h2Basket}>Basket</h2>
                </a>
            </div>
        </div>
    );
};

export default Header;