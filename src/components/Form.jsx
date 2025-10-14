import PropTypes from "prop-types";

export const Form = ({ onCreateProduct }) => {
  return (
    <>
      <div className="form-container">
        <h2>Crear Nuevo Producto</h2>
        <form onSubmit={onCreateProduct} className="product-form">
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
          <div className="form-group">
            <input
              type="text"
              name="category"
              placeholder="Categoría"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="stock"
              placeholder="Stock"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="url"
              name="image"
              placeholder="URL de la imagen"
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Crear Producto
          </button>
        </form>
      </div>
    </>
  );
};

Form.propTypes = {
  onCreateProduct: PropTypes.func.isRequired,
};

Form.defaultProps = {
  onCreateProduct: () => {},
};
