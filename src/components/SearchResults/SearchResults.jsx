import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { searchProducts } from "../../api"; 
import css from "./SearchResults.module.css";
import { BasketContext } from "../BasketContent/BasketContent";

const SearchResults = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get("type") || "";

    const [filteredProducts, setFilteredProducts] = useState([]);
    const { addToBasket } = useContext(BasketContext);

    useEffect(() => {
        if (!type) return;
        const fetchData = async () => {
            const results = await searchProducts(type);
            setFilteredProducts(results);
        }
        fetchData();
    }, [type]);

    return (
        <div className={css.container}>
            <h2>Search results for: {type}</h2>
            {filteredProducts.length > 0 ? (
                <ul className={css.products}>
                    {filteredProducts.map((product) => (
                        <li key={product.id} className={css.product}>
                            <img src={product.image} alt={product.title} />
                            <p>{product.title} - ${product.price}</p>
                            <button type="button" className={css.button} onClick={() => addToBasket(product)}>Buy now</button>
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