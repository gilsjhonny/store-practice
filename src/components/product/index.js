import React from 'react';
import { Link } from 'react-router-dom';
import {
  ProductContainer,
  ProductImage,
  ProductFooter,
  Title,
  Description,
  Price,
  AddToCartButton,
} from './styles/product';

const Product = ({ imageUrl, title, description, price, id }) => {
  return (
    <ProductContainer>
      <ProductImage src={imageUrl} />
      <ProductFooter>
        <Link to={`/product/${id}`}>
          <Title>{title}</Title>
        </Link>
        <Description>{description}</Description>
        <Price>${price}</Price>
        <AddToCartButton>+</AddToCartButton>
      </ProductFooter>
    </ProductContainer>
  );
};

export default Product;
