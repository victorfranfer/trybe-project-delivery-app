import styled from "styled-components";

export const ProductsSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  row-gap: 50px;
  column-gap: 30px;
  margin-top: 50px;
`;

export const CartButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #036b52;
  border-radius: 10px;
  & > button {
    display: flex;
    height: 79px;
    width: 445px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #f2fffc;
  }
`;
