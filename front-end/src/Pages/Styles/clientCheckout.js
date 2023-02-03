import styled from "styled-components";

export const ClientCheckoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > header {
    width: 100vw;
  }
  & > div {
    margin-top: 20px;
    flex-direction: column;
    display: flex;
    width: 100vw;
    max-width: 1140.14px;
    & > h2,
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
    }
  }
`;

export const CheckoutTable = styled.table`
  th {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #001813;
  }
`;

export const TableColumn = styled.td`
  background-color: ${(props) => props.color};
  color: ${(props) => {
    if (props.color === "#2FC18C" || props.color === "#EAF1EF") {
      return "#001813";
    }
    return "#F2FFFC";
  }};
  font-family: "Roboto";
  font-weight: 500;
  font-size: 28px;
  text-align: ${(props) => {
    if (props.color !== "#EAF1EF") {
      return "center";
    }
  }};
  width: ${(props) => {
    if (props.color === "#2FC18C") {
      return "70px";
    }
    if (props.color === "#EAF1EF") {
      return "400px";
    }
    return "167px";
  }};
  & > button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #f2fffc;
    margin: 0 12px;
  }
`;

export const CheckoutForm = styled.form`
  padding: 24px 0;
  width: 100vw;
  max-width: 1140.14px;
  background: #eaf1ef;
  border: 1px solid #b1c2be;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    column-gap: 20px;
    width: 100%;
    & > label {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-family: "Roboto";
      font-weight: 400;
      font-size: 20px;
      color: #001813;
      & > select {
        background: #ffffff;
        border: 1px solid #001813;
        border-radius: 5px;
        height: 52px;
        min-width: 250px;
      }
      & > input {
        background: #ffffff;
        border: 1px solid #001813;
        border-radius: 5px;
        height: 50px;
        min-width: 250px;
        margin: 0;
        padding: 0;
        max-width: 388px;
        width: 30vw;
      }
    }
  }
  & > button {
    background: #036b52;
    border-radius: 10px;
    height: 70px;
    width: 300px;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f2fffc;
    margin-top: 24px;
  }
`;
