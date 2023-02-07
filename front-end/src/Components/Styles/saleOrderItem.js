import styled from "styled-components";

export const OrderItemDiv = styled.div`
  background: #eaf1ef;
  border: 1px solid #b1c2be;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 164px;
  width: 797px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & > span {
    background: ${(props) => {
      if (props.status === "Pendente") {
        return "rgba(204, 184, 0, 0.75)";
      }
      if (props.status === "Preparando") {
        return "rgba(102, 204, 0, 0.75);";
      }
      return "rgba(0, 204, 155, 0.75)";
    }};
    border-radius: 10px;
    height: 141px;
    width: 295px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #001813;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > p {
      font-family: "Roboto";
      font-weight: 400;
      font-size: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #001813;
      margin: 0;
    }
  }
`;

export const Orders = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
  margin: 20px auto;
  column-gap: 40px;
  row-gap: 70px;
  & > button {
    height: 164px;
    width: 797px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }
`;
