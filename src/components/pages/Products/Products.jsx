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

const Products = () => {
  const products = useSelector(selectProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(SelectError);
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
          <div>
            <ul className={css.ul}>
              {filteredProducts.map((product, index) => (
                <li key={`${product.id}-${index}`} className={css.li}>
                  <img src={product.images} alt="image" className={css.img} />
                  <h2 className={css.h2}>{product.title}</h2>
                  <p className={css.pReadMore}>
                    {product.description.length > 25
                      ? product.description.slice(0, 25) + "..."
                      : product.description}
                    {product.description.length > 25 && (
                      <a className={css.readMore}>Read More</a>
                    )}
                  </p>
                  <p className={css.typeOfProduct}>{product.category.name}</p>
                  <div className={css.divCart}>
                    <div>
                      <p className={css.price}>Price</p>
                      <span className={css.spanPrice}>$ {product.price}</span>
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
        </div>
      </div>
    </section>
  );
};

export default Products;
