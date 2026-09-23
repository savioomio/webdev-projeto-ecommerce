import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const isFavorite = (id) => favorites.some((item) => item.id === id);

    const toggleFavorite = (product) => {
        setFavorites((current) =>
            current.some((item) => item.id === product.id)
                ? current.filter((item) => item.id !== product.id)
                : [...current, product]
        );
    };

    const value = { favorites, isFavorite, toggleFavorite };

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);

    if (!context) {
        throw new Error("useFavorites deve ser usado dentro de um FavoritesProvider");
    }

    return context;
};
