import React from 'react';
import styled from 'styled-components/macro';
import Product from '../product';

const ProductsListContainer = styled.div``;

const ProductsList = () => {
  return (
    <ProductsListContainer>
      <Product
        image={'http://placekitten.com/300/300'}
        title="Some Title"
        description="This is a description"
        price={16}
      />
    </ProductsListContainer>
  );
};

export default ProductsList;
