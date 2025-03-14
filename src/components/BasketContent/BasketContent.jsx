import { createContext, useState, useEffect } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const LS_KEY = "basket";

    const [basket, setBasket] = useState(() => {
        const savedBasket = localStorage.getItem(LS_KEY);
        try {
            const parsedBasket = savedBasket ? JSON.parse(savedBasket) : [];
            return Array.isArray(parsedBasket) ? parsedBasket : [];
        } catch (error) {
            console.error("Failed to parse basket from localStorage:", error);
            return;
        }
    })

    useEffect(() => {
        localStorage.setItem(LS_KEY, JSON.stringify(basket))
    }, [basket])

    const addToBasket = (product) => {
        setBasket((prevBasket) => {
            const existingProduct = prevBasket.find((item) => item.id === product.id);

            if (existingProduct) {
                return prevBasket.map((item) =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                )
            } else {
                return [...prevBasket, {...product, qty: 1} ]
            }
        })
    }

    const removeFromBasket = (id) => {
        setBasket((prevBasket) =>
            prevBasket.map((item) =>
                item.id === id ? { ...item, qty: item.qty - 1 } : item
            ).filter((item) => item.qty > 0)
        )
    }

    const calculateTotalPrice = (basket) => {
        return basket.reduce((total, item) => total + item.price * item.qty ,0)
    } 

    return (
        <BasketContext.Provider value={{removeFromBasket, addToBasket, calculateTotalPrice, basket}} >
            {children}
        </BasketContext.Provider>
    )
}
