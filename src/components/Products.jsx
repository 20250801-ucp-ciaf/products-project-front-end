import PropTypes from "prop-types";
import { Product } from "./Product";

export const Products = ({ products = [] }) => {
  return (
    <>
      <div className="products-container">
        <h2>Lista de Productos</h2>
        {products.length === 0 ? (
          <p className="no-products">No hay productos disponibles</p>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
};

Products.defaultProps = {
  products: [],
};
