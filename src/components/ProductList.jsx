// ProductList.jsx
import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map(product => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;