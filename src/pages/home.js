import React from 'react';
import styled from 'styled-components/macro';
import { getTextExcerpt } from '../utils/strings';
import { ProductsList } from '../components';
import { useFetch } from '../hooks';

const Main = styled.div``;

const Home = () => {
  const products = useFetch('https://fakestoreapi.com/products');

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
