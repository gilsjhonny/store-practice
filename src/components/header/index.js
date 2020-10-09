import React from 'react';
import { useSelector } from 'react-redux';
import {
  HeaderContainer,
  Logo,
  SearchBar,
  ShoppingCartButton,
  ShoppingCartBag,
} from './styles/header';

const Header = () => {
  const itemsInCartLength = useSelector((store) => store.products.length);

  return (
    <HeaderContainer>
      <Logo>El Brujo Store</Logo>
      <SearchBar placeholder="Search" />
      <ShoppingCartButton>
        ({itemsInCartLength})
        <ShoppingCartBag src={'images/shopping-carg-bag.svg'} />
      </ShoppingCartButton>
    </HeaderContainer>
  );
};

export default Header;
