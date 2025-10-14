import PropTypes from 'prop-types';

export const Product = ({ product = {} }) => {
  return (
    <>
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <span className="product-id">ID: {product.id}</span>
      </div>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

Product.defaultProps = {
  product: {},
};
