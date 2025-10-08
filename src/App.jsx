import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("http://localhost:3001/products");
    const data = await response.json();
    setProducts(data.products);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        price: e.target.price.value,
      }),
    });

    if (response.ok) {
      e.target.reset();
      getProducts();
    }
  };

  /*
   useEffect: hook para ejecutar efectos secundarios como llamadas a APIs, conexiones con websockets, conexiones con bases de datos, etc.

   Cuando se carga el componente se ejecuta el getProducts.
   Llamar funciones directamente en el cuerpo del componente causa bucles infinitos porque se ejecuta en cada render, no solo al montar.
   Esta es una de las reglas fundamentales de React: los efectos secundarios (como llamadas a APIs) deben ir dentro de useEffect.
  */
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="app">
      <h1>Gestión de Productos</h1>

      <div className="form-container">
        <h2>Crear Nuevo Producto</h2>
        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nombre del producto"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="price"
              placeholder="Precio"
              min="0"
              step="0.01"
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Crear Producto
          </button>
        </form>
      </div>
      <div className="products-container">
        <h2>Lista de Productos</h2>
        {products.length === 0 ? (
          <p className="no-products">No hay productos disponibles</p>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price}</p>
                <span className="product-id">ID: {product.id}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
