import { useState, useEffect } from "react";
import "./App.css";
import { Products } from "./components/Products";
import { Form } from "./components/Form";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("http://localhost:3001/products");
    const data = await response.json();
    setProducts(data.products);
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        price: e.target.price.value,
        category: e.target.category.value,
        stock: e.target.stock.value,
        image: e.target.image.value,
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
      <Form onCreateProduct={handleCreateProduct} />
      <Products products={products} />
    </div>
  );
}

export default App;
