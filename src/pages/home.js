import React from 'react';
import styled from 'styled-components/macro';
import { getTextExcerpt } from '../utils/strings';
import { ProductsList } from '../components';
import { useFetch } from '../hooks';
import LoadingAnimation from '../components/loading-animation';

const Main = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  overflow-y: auto;

  > div {
    height: 100%;
  }
`;

const Home = () => {
  const products = useFetch('https://fakestoreapi.com/products');

  if (!products) {
    return (
      <Main>
        <LoadingAnimation>Loading products...</LoadingAnimation>
      </Main>
    );
  }

  const formattedProducts = products.map((product) => {
    return {
      id: product.id,
      title: getTextExcerpt(product.title, 12),
      imageUrl: product.image,
      description: getTextExcerpt(product.description, 12),
      price: product.price,
    };
  });

  return (
    <Main>
      <ProductsList products={formattedProducts} />
    </Main>
  );
};

export default Home;
