import { useContext } from "react";
import { BasketContext } from "../../BasketContent/BasketContent.jsx";
import css from "./Basket.module.css";

const Basket = () => {
  const { basket, removeFromBasket, calculateTotalPrice } =
    useContext(BasketContext);

  const totalPrice = calculateTotalPrice(basket);

  return (
    <div className={css.container}>
      <h2>Your Basket</h2>
      {basket.length > 0 ? (
        <div>
          <div className={css.price}>
            <h3>Total price: ${totalPrice.toFixed(2)}</h3>
          </div>
          <ul className={css.basketList}>
            {basket.map((product) => (
              <li key={`${product.id}`} className={css.li}>
                <img src={product.images} alt="image" className={css.img} />
                <h2 className={css.h2}>{product.title}</h2>
                <p className={css.typeOfProduct}>{product.category.name}</p>
                <p className={css.quantity}>Quantity: {product.qty}</p>
                <div className={css.divCart}>
                  <div>
                    <p className={css.price}>Price</p>
                    <span className={css.spanPrice}>$ {product.price}</span>
                  </div>
                  <button
                    className={css.buttonCart}
                    onClick={() => removeFromBasket(product.id)}
                  >
                    Delete item
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Your basket is empty.</p>
      )}
    </div>
  );
};

export default Basket;
