import React from 'react';
import ProductCard from './ProductCard' // Assuming ProductCard is in the same directory
const ProductList = ({ products }: { products: any[] }) => (
  <div>
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;