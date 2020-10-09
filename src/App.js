import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components/macro';
import { Header } from './components';
import Home from './pages/home';
import Product from './pages/product';
import store from './redux/store';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  }

  body {
    position: relative;
    height: 100vh;
  }

  *{
    box-sizing: border-box;
  }
`;

const AppContainer = styled.div`
  height: 100vh;
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
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
      <Provider store={store}>
        <AppContainer>
          <BrowserRouter>
            <SquareBackground />
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/product/:id" component={Product} />
          </BrowserRouter>
        </AppContainer>
      </Provider>
    </div>
  );
};

export default App;
