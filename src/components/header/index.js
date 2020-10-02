import React from 'react';
import {
  HeaderContainer,
  Logo,
  SearchBar,
  ShoppingCartButton,
  ShoppingCartBag,
} from './styles/header';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>El Brujo Store</Logo>
      <SearchBar placeholder="Search" />
      <ShoppingCartButton>
        <ShoppingCartBag src={'images/shopping-carg-bag.svg'} />
      </ShoppingCartButton>
    </HeaderContainer>
  );
};

export default Header;
