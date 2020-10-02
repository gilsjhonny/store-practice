import styled from 'styled-components/macro';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  padding: 40px 20px 10px 40px;
`;

export const Logo = styled.div`
  color: #473889;
  font-weight: 600;
  margin-right: auto;
  user-select: none;
`;

export const SearchBar = styled.input`
  width: 120px;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #e5e5e5;
  transition: width 0.5s ease-in-out;

  :focus {
    border: 2px solid #473889;
    outline: none;
    width: 200px;
  }

  ::placeholder {
    color: #473889;
    font-weight: 500;
  }
`;

export const ShoppingCartButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  height: 35px;
  width: 35px;
  margin-left: 60px;
`;

export const ShoppingCartBag = styled.img`
  cursor: pointer;
  margin-top: 5px;
  height: 100%;
`;
