import { FaTshirt, FaMobileAlt, FaShoePrints } from "react-icons/fa";
import { GiBackpack } from "react-icons/gi";

const CategorySection = () => {
    return (
        <section className="categories">
            <h2>Categorias</h2>

            <div className="category-list">
                <div className="category-card">
                    <span className="category-icon"><FaTshirt /></span>
                    <p>Roupas</p>
                </div>

                <div className="category-card">
                    <span className="category-icon"><FaMobileAlt /></span>
                    <p>Eletrônicos</p>
                </div>

                <div className="category-card">
                    <span className="category-icon"><FaShoePrints /></span>
                    <p>Calçados</p>
                </div>

                <div className="category-card">
                    <span className="category-icon"><GiBackpack /></span>
                    <p>Acessórios</p>
                </div>
            </div>
        </section>
    )
}

export default CategorySection;
