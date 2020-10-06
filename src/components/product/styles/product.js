import styled from 'styled-components/macro';

export const ProductContainer = styled.div`
  border-radius: 30px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 400px;
  padding: 10px;
  box-shadow: 0px 9px 38px 0px #dadada;
`;

export const ProductImage = styled.img`
  border-radius: 30px;
  margin-bottom: 10px;
  object-fit: contain;
  height: 50%;
`;

export const ProductFooter = styled.div`
  background: #786fc3;
  border-radius: 30px;
  padding: 20px;
  color: white;
  position: relative;
  padding: 30px;
`;

export const Title = styled.h2`
  font-style: 14px;
  font-weight: 500;
  margin: 0;
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 14px;
`;

export const Price = styled.p`
  margin-top: 25px;
`;

export const AddToCartButton = styled.button`
  background: #574b96;
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  position: absolute;
  right: 25px;
  bottom: 25px;
  font-size: 33px;
  font-weight: 100;
  color: white;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  :hover {
    transform: scale(1.1);
  }

  :focus {
    outline: none;
  }
`;
