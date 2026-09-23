import { FaMobileAlt, FaLaptop, FaTshirt } from "react-icons/fa";
import { GiLargeDress, GiPerfumeBottle, GiRunningShoe } from "react-icons/gi";

// slug = nome da categoria na API (dummyjson.com)
export const categorias = [
    { slug: "smartphones", nome: "Celulares", icon: FaMobileAlt },
    { slug: "laptops", nome: "Notebooks", icon: FaLaptop },
    { slug: "mens-shirts", nome: "Moda masculina", icon: FaTshirt },
    { slug: "womens-dresses", nome: "Moda feminina", icon: GiLargeDress },
    { slug: "mens-shoes", nome: "Calçados", icon: GiRunningShoe },
];

export const buscarCategoria = (slug) => categorias.find((c) => c.slug === slug);
