import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // TODO: Replace with real API call
    // fetch('/api/products', { headers: { Authorization: `Bearer ${token}` } })
    //   .then(res => res.json())
    //   .then(data => setProducts(data));
    setProducts([
    //   { id: 1, name: 'Sample Product', price: 100 },
    //   { id: 2, name: 'Another Product', price: 200 },
    ]);
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ProductList products={products} />
    </div>
  );
};

export default Home;