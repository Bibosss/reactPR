import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import css from "./SearchResults.module.css";
import { BasketContext } from "../BasketContent/BasketContent";
import { searchProduct } from "../../redux/products/products";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../redux/products/productsSlice";

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query") || "";

  const filteredProducts = useSelector(selectProducts);
  const dispatch = useDispatch();
  const { addToBasket } = useContext(BasketContext);

  useEffect(() => {
    dispatch(searchProduct(query));
  }, [dispatch, query]);

  return (
    <div className={css.container}>
      <h2>Search results for: {query}</h2>
      {filteredProducts.length > 0 ? (
        <ul className={css.products}>
          {filteredProducts.map((product) => (
            <li key={product.id} className={css.product}>
              <img src={product.image} alt={product.title} />
              <p>
                {product.title} - ${product.price}
              </p>
              <button
                type="button"
                className={css.button}
                onClick={() => addToBasket(product)}
              >
                Buy now
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default SearchResults;
