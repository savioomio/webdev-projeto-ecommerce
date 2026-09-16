import { useState } from "react";
import { useCart } from "../context/CartContext";

const AddToCartButton = ({ product }) => {
    const { addItem } = useCart();
    const [adicionado, setAdicionado] = useState(false);

    const handleClick = () => {
        addItem(product);
        setAdicionado(true);
        setTimeout(() => setAdicionado(false), 1500);
    };

    return (
        <button className="btn-secondary" onClick={handleClick}>
            {adicionado ? "Adicionado ✓" : "Adicionar ao carrinho"}
        </button>
    );
};

export default AddToCartButton;
