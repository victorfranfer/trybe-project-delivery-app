import styled from "styled-components";

export const ProductCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #b1c2be;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 479px;
  width: 359px;
  position: relative;
  & > span {
    position: absolute;
    top: 10px;
    left: 10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-indent: 15px;
    color: #001813;
    background: rgba(242, 255, 252, 0.75);
    border-radius: 10px;
    height: 63px;
    width: 154px;
  }
  & > img {
    height: 357px;
    margin: 0 auto;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #eaf1ef;
    & > p {
      font-family: "Roboto";
      font-weight: 400;
      font-size: 24px;
      color: #001813;
      margin: 5px
    }
    & > div {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;
      & > button {
        background: #036b52;
        border-radius: 10px;
        height: 40px;
        width: 60px;
        font-family: "Roboto";
        font-weight: 700;
        font-size: 48px;
        display: flex;
        align-items: center;
        text-indent: 16px;
        color: #f2fffc;
      }
      & > input {
        font-family: "Roboto";
        font-weight: 400;
        font-size: 24px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #828282;
        height: 39px;
        width: 55px;
        border: none;
      }
    }
  }
`;
