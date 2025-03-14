const API_URL = "https://fakestoreapi.com/products";

// Отримати всі товари
export const fetchProducts = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch products");
        return await response.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

// Отримати товар за ID
export const fetchProductById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product");
        return await response.json();
    } catch (error) {
        console.error(`Error fetching product ${id}:`, error);
        return null;
    }
};

// Отримати товари за запитом (пошук)
export const searchProducts = async (query) => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch products");
        const products = await response.json();
        return products.filter((product) => 
            product.title.toLowerCase().includes(query.toLowerCase())
        );
    } catch (error) {
        console.error("Error searching products:", error);
        return [];
    }
};
