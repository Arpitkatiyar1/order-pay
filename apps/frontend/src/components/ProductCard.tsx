import React from 'react';

const ProductCard = ({ product }: { product: any }) => (
  <div style={{ border: '1px solid #ccc', margin: 8, padding: 8 }}>
    <h3>{product.name}</h3>
    <p>Price: ${product.price}</p>
  </div>
);

export default ProductCard;