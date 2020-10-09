import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import LoadingAnimation from '../components/loading-animation';
import { useFetch } from '../hooks';

const ProductPageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  max-width: 1000px;
  padding: 20px;
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const ProductImages = styled.div`
  border-radius: 35px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 45px;
  padding: 40px;
  position: relative;
  width: 400px;
  height: 400px;
  box-shadow: 0px 15px 20px 6px rgb(62 62 62 / 5%);
`;

const ProductImage = styled.img`
  width: 60%;
`;

const ZoomInButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  border-radius: 50%;
  border: none;
  height: 45px;
  width: 45px;
  background: #e6f7ff;
  cursor: pointer;
  color: #483988;
  font-weight: 200;
  font-size: 25px;
`;

const ProductDetails = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  color: #483988;
`;

const Description = styled.p`
  font-weight: 300;
  color: #959595;
`;

const Price = styled.p`
  font-size: 30px;
  color: #483988;
`;

const Product = () => {
  const { id } = useParams();
  const product = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (!product) {
    return (
      <ProductPageContainer>
        <LoadingAnimation>Loading product...</LoadingAnimation>
      </ProductPageContainer>
    );
  }

  return (
    <ProductPageContainer>
      <Inner>
        <ProductImages>
          <ZoomInButton>+</ZoomInButton>
          <ProductImage src={product.image} />
        </ProductImages>
        <ProductDetails>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>${product.price}</Price>
        </ProductDetails>
      </Inner>
    </ProductPageContainer>
  );
};

export default Product;
