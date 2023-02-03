import styled from "styled-components";

export const OrderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 1140.14px;
    & > p {
      align-self: flex-start;
      font-family: "Roboto";
      font-weight: 500;
      font-size: 28px;
      color: #343434;
    }
    & > span {
      align-self: flex-end;
      background: #036b52;
      border-radius: 10px;
      display: flex;
      height: 50px;
      width: 300px;
      border: none;
      font-family: "Roboto";
      font-weight: 500;
      font-size: 28px;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      color: #f2fffc;
      margin: 24px 0;
    }
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        text-indent: 20px;
        color: #001813;
      }
      & > button {
        background: #036b52;
        border-radius: 10px;
        height: 40px;
        width: 250px;
        font-family: "Roboto";
        font-weight: 500;
        font-size: 18px;
        text-align: center;
        color: #f2fffc;
      }
    }
  }
`;
