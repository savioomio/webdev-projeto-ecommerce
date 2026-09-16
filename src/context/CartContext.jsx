import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (product) => {
        setItems((current) => {
            const existente = current.find((item) => item.id === product.id);

            if (existente) {
                return current.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...current, { ...product, quantity: 1 }];
        });
    };

    const totalCount = useMemo(
        () => items.reduce((total, item) => total + item.quantity, 0),
        [items]
    );

    const value = { items, addItem, totalCount };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart deve ser usado dentro de um CartProvider");
    }

    return context;
};
