import styled from 'styled-components';

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #eaf1ef;
  border: 1px solid #b1c2be;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 444px;
  width: 425px;
  & > label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 112px;
    width: 371px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    display: flex;
    color: #001813;
    & > input {
      height: 70px;
      width: 371px;
      left: 0px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      display: flex;
      align-items: center;
      text-indent: 20px;
      color: #828282;
      background: #ffffff;
      border: 1px solid #001813;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
    }
  }
  & > button {
    background: #eaf1ef;
    border: none;
  }
`;

export const FilledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #036b52;
  border-radius: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #f2fffc;
  height: 59px;
  width: 370px;
`;

export const UnfilledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 59px;
  width: 370px;
  border: 2px solid #036b52;
  border-radius: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #036b52;
`;
