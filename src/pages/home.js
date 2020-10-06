import React from 'react';
import { Header, ProductsList } from '../components';

import styled from 'styled-components/macro';
import { getTextExcerpt } from '../utils/strings';

const Main = styled.div``;

const Home = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        const formattedProducts = json.map((product) => {
          return {
            title: getTextExcerpt(product.title, 12),
            imageUrl: product.image,
            description: getTextExcerpt(product.description, 12),
            price: product.price,
          };
        });

        setProducts(formattedProducts);
      });
  }, []);

  return (
    <>
      <Header />
      <Main>
        <ProductsList products={products} />
      </Main>
    </>
  );
};

export default Home;
