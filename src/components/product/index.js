import React from 'react';
import {
  ProductContainer,
  ProductImage,
  ProductFooter,
  Title,
  Description,
  Price,
  AddToCartButton,
} from './styles/product';

const Product = ({ imageUrl, title, description, price }) => {
  return (
    <ProductContainer>
      <ProductImage src={imageUrl} />
      <ProductFooter>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>{price}</Price>
        <AddToCartButton />
      </ProductFooter>
    </ProductContainer>
  );
};

export default Product;
