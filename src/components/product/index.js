import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addOrUpdateProduct } from '../../redux/shoppingCartDuck';
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
  const dispatch = useDispatch();

  return (
    <ProductContainer>
      <ProductImage src={imageUrl} />
      <ProductFooter>
        <Link to={`/product/${id}`}>
          <Title>{title}</Title>
        </Link>
        <Description>{description}</Description>
        <Price>${price}</Price>
        <AddToCartButton
          onClick={() => dispatch(addOrUpdateProduct({ id, title, price }))}
        >
          +
        </AddToCartButton>
      </ProductFooter>
    </ProductContainer>
  );
};

export default Product;
