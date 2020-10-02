import React from 'react';
import { Header, ProductsList } from '../components';

import styled from 'styled-components/macro';

const Main = styled.div``;

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <ProductsList />
      </Main>
    </>
  );
};

export default Home;
