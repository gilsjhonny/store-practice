import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks';
import styled from 'styled-components/macro';

const ProductPageContainer = styled.div`
  display: flex;
`;

const ProductImages = styled.div`
  max-width: 500px;
`;

const ZoomInButton = styled.button``;

const ProductImage = styled.img``;

const ProductDetails = styled.div``;

const Title = styled.h1``;

const Description = styled.p``;

const Price = styled.p``;

const Product = () => {
  const { id } = useParams();
  const product = useFetch(`https://fakestoreapi.com/products/${id}`);

  return (
    <ProductPageContainer>
      <ProductImages>
        <ZoomInButton>+</ZoomInButton>
        <ProductImage src={product.image} />
      </ProductImages>
      <ProductDetails>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <Price>{product.price}</Price>
      </ProductDetails>
    </ProductPageContainer>
  );
};

export default Product;
