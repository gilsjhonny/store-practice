import React from 'react';
import styled from 'styled-components/macro';
import Product from '../product';

const ProductsListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
`;

const ProductsList = ({ products }) => {
  return (
    <ProductsListContainer>
      {products.length === 0 ? (
        <p>No products to display.</p>
      ) : (
        products.map((product) => (
          <Product
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))
      )}
    </ProductsListContainer>
  );
};

export default ProductsList;
