import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components/macro';
import Home from './pages/home';
import Product from './pages/product';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }

  body {
    position: relative;
    height: 100vh;
  }
`;

const AppContainer = styled.div`
  height: 100vh;
  position: relative;
  z-index: 0;
`;

const SquareBackground = styled.div`
  height: calc(100% - 20px);
  width: 100%;
  background: #e5f8ff;
  border-radius: 40px;
  position: absolute;
  top: 10px;
  left: -50%;
  transform: skewX(-20deg);
  z-index: -1;
`;

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <AppContainer>
        <BrowserRouter>
          <SquareBackground />
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
        </BrowserRouter>
      </AppContainer>
    </div>
  );
};

export default App;
