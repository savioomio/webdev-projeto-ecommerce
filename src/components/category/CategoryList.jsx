import CategoryCard from "./CategoryCard";

const CategoryList = ({ categorias }) => {
    return (
        <div className="category-list">
            {categorias.map((c) => (
                <CategoryCard key={c.slug} categoria={c} />
            ))}
        </div>
    );
};

export default CategoryList;
