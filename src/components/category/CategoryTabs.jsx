import { Link } from "react-router";

const CategoryTabs = ({ categorias, ativa }) => {
    const classe = (slug) => (slug === ativa ? "tab active" : "tab");

    return (
        <nav className="category-tabs">
            <Link to="/produtos" className={classe(null)}>Todos</Link>
            {categorias.map((c) => (
                <Link key={c.slug} to={`/produtos?categoria=${c.slug}`} className={classe(c.slug)}>
                    {c.nome}
                </Link>
            ))}
        </nav>
    );
};

export default CategoryTabs;
