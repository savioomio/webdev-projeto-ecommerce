import { Link } from "react-router";

const CategoryCard = ({ categoria }) => {
    const Icon = categoria.icon;

    return (
        <Link to={`/produtos?categoria=${categoria.slug}`} className="category-card">
            <span className="category-icon"><Icon /></span>
            <p>{categoria.nome}</p>
        </Link>
    );
};

export default CategoryCard;
