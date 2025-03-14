import { useContext } from "react";
import { BasketContext } from "../../BasketContent/BasketContent.jsx";
import css from "./Basket.module.css";

const Basket = () => {
  const { basket, removeFromBasket, calculateTotalPrice } = useContext(BasketContext);

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
            <li key={product.id} className={css.basketItem}>
              <img src={product.image} alt={product.title} className={css.img} />
              <p>{product.title}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.qty}</p>
                <button onClick={() => removeFromBasket(product.id)} className={css.button}>
                  Remove
                </button>
            </li>
          ))}
          </ul>
          </div>
      ) : (
        <p>Your basket is empty.</p>
      )}
    </div>
  )
};

export default Basket;