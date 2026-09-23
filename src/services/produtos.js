import { categorias, buscarCategoria } from "../data/categorias";

const API = "https://dummyjson.com/products/category";
const CAMPOS = "title,price,category,thumbnail,rating";

// Converte o formato da API para o formato usado pelos componentes
const normalizar = (p) => ({
    id: p.id,
    title: p.title,
    price: p.price,
    image: p.thumbnail,
    category: buscarCategoria(p.category)?.nome ?? p.category,
    rating: { rate: p.rating },
});

const buscarPorCategoria = async (slug) => {
    const res = await fetch(`${API}/${slug}?select=${CAMPOS}`);
    if (!res.ok) {
        throw new Response("Não foi possível carregar os produtos", { status: res.status });
    }

    const { products } = await res.json();
    return products.map(normalizar);
};

// Sem categoria: busca todas as categorias da loja em paralelo
export const buscarProdutos = async (categoria) => {
    if (categoria) return buscarPorCategoria(categoria);

    const listas = await Promise.all(categorias.map((c) => buscarPorCategoria(c.slug)));
    return listas.flat();
};
