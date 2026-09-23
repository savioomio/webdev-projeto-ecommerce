import CategoryList from "./category/CategoryList";
import { categorias } from "../data/categorias";

const CategorySection = () => {
    return (
        <section className="categories">
            <h2>Categorias</h2>
            <CategoryList categorias={categorias} />
        </section>
    )
}

export default CategorySection;
