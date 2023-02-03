import styled from "styled-components";

export const HeaderNav = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content:space-between;
  max-width: 100vw;
  background-color: #036B52;
  & > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 70px;
    width: 50vw;
    max-width: 360px;
  }
  p, a {
    font-family: "Roboto";
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;
    color: #F2FFFC;
    display: flex;
    width: 25vw;
    max-width: 180px;
  }
`;

export const NavLink = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${ props => props.color };
  height: 70px;
  max-width: ${ (props) => {
    if (props.sair === true) {
      return '90px';
    }
    return '180px';
  }};
  flex: ${(props) => {
    if (props.sair) {
      return '1 1 90px';
    }
    return '1 1 180px';
  }}
`;