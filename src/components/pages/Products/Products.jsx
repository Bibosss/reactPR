import { useContext, useEffect, useState } from "react";
import css from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  SelectError,
  selectIsLoading,
  selectProducts,
} from "../../../redux/products/productsSlice";
import { fetchProducts } from "../../../redux/products/products";
import { BasketContext } from "../../BasketContent/BasketContent";
import { HiViewGridAdd } from "react-icons/hi";

const Products = () => {
  const products = useSelector(selectProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(SelectError);
  const [currentCategory, setCurrentCategory] = useState("All");
  const dispatch = useDispatch();

  const { addToBasket } = useContext(BasketContext);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (!isSearching) {
      setFilteredProducts(products);
    }
  }, [isSearching, products]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === "") {
      setFilteredProducts(products);
      setIsSearching(false);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
      setIsSearching(true);
    }
  };

  const handleChangeCategory = (category) => {
    setCurrentCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
      isSearching(false);
    } else {
      const filtered = products.filter(
        (product) => product.category.name === category
      );
      setFilteredProducts(filtered);
      isSearching(true);
    }
  };

  if (isLoading) return <p>...Loading</p>;
  if (error) return <div>Error: {error}</div>;
  if (!products.length) return <p>No products found</p>;

  return (
    <section className="container">
      <div className={css.mainDiv}>
        <div className={css.firstDiv}>
          <div>
            <form className={css.form} onSubmit={handleSubmit}>
              <label htmlFor="header-inp">Type</label>
              <input
                type="text"
                id="header-inp"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className={css.button} type="submit">
                🔍
              </button>
            </form>
          </div>
          <div className={css.divCartAndProducts}>
            {filteredProducts.length === 0 ? (
              <p>Sadly, but there are not any products now 😔</p>
            ) : (
              <div>
                <ul className={css.ul}>
                  {filteredProducts.map((product, index) => (
                    <li key={`${product.id}-${index}`} className={css.li}>
                      <img
                        src={product.images}
                        alt="image"
                        className={css.img}
                      />
                      <h2 className={css.h2}>{product.title}</h2>
                      <p className={css.pReadMore}>
                        {product.description.length > 25
                          ? product.description.slice(0, 25) + "..."
                          : product.description}
                        {product.description.length > 25 && (
                          <a className={css.readMore}>Read More</a>
                        )}
                      </p>
                      <p className={css.typeOfProduct}>
                        {product.category.name}
                      </p>
                      <div className={css.divCart}>
                        <div>
                          <p className={css.price}>Price</p>
                          <span className={css.spanPrice}>
                            $ {product.price}
                          </span>
                        </div>
                        <button
                          className={css.buttonCart}
                          onClick={() => addToBasket(product)}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className={css.divNavLinkIcon}>
              <div className={css.iconP}>
                <HiViewGridAdd fill="blue" className={css.icon} />
                <h2 className={css.categoriesH2}>Categories: </h2>
              </div>
              <ul className={css.ulNavLinks}>
                <li
                  className={`${css.navLink} ${
                    currentCategory === "All"
                      ? `${css.activeNavLink} ${css.active}`
                      : ""
                  }`}
                  onClick={() => handleChangeCategory("All")}
                >
                  All
                </li>
                <li
                  className={`${css.navLink} ${
                    currentCategory === "Clothes"
                      ? `${css.activeNavLink} ${css.active}`
                      : ""
                  }`}
                  onClick={() => handleChangeCategory("Clothes")}
                >
                  Clothes
                </li>
                <li
                  className={`${css.navLink} ${
                    currentCategory === "Electronics"
                      ? `${css.activeNavLink} ${css.active}`
                      : ""
                  }`}
                  onClick={() => handleChangeCategory("Electronics")}
                >
                  Electronics
                </li>
                <li
                  className={`${css.navLink} ${
                    currentCategory === "Furniture"
                      ? `${css.activeNavLink} ${css.active}`
                      : ""
                  }`}
                  onClick={() => handleChangeCategory("Furniture")}
                >
                  Furniture
                </li>
                <li
                  className={`${css.navLink} ${
                    currentCategory === "Shoes"
                      ? `${css.activeNavLink} ${css.active}`
                      : ""
                  }`}
                  onClick={() => handleChangeCategory("Shoes")}
                >
                  Shoes
                </li>
                <li
                  className={`${css.navLink} ${
                    currentCategory === "Miscellaneous"
                      ? `${css.activeNavLink} ${css.active}`
                      : ""
                  }`}
                  onClick={() => handleChangeCategory("Miscellaneous")}
                >
                  Miscellaneous
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
