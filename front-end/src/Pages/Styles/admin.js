import styled from 'styled-components';

export const AdminPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AdminNameForm = styled.section`
  display: flex;
  align-itens: center;
  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    display: flex;
    align-items: flex-end;
    width: 40%;
    color: #343434;
  }

  span {
    width: 201px;
    height: 14px;
    line-height: 42px;
    color: #878787;
  }
`;

export const AdminContainer = styled.section`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #FFFFFF;
  padding: 2px;
  margin-bottom: 42px;
`;

export const AdminForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 25.5px;
  width: 1640px;
  height: 161px;
  left: 146px;
  top: 170px;
  background: #FFFFFF;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  label {
    display: flex;
    flex-direction: column;
    width: 325px;
    height: 112px;
    color: #001813;
  }
  input, select {
    width: 325px;
    height: 70px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-indent: 20px;
    color: #828282;
    background: #FFFFFF;
    border: 1px solid #001813;
    border-radius: 5px;
  }
  
  select {
    color: #001813;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    font-size: 28px;
    line-height: 33px;
    color: #F2FFFC;
    background: #036B52;
    border-radius: 10px;
    width: 200px;
    height: 59px
  }
`;

export const AdminTableContainer = styled.div`
  width: 1640px;
  h2 {
    font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;
  color: #343434;
  }
`;

export const AdminTable = styled.table`
  width: 1640px;
  min-height: 550px;
  margin-bottom: 24px;
  font-family: 'Roboto';
  color: #001813;
  border: 1px solid #B1C2BE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  thead {
    display: block;
    width: 1599px;
    height: 62px;
    tr {
      font-size: 24px;
      line-height: 28px;
    }
  }
  tbody {
    display: block;
    tr {
      height: 62px;
      text-align: center;
    }
  }
`;

export const ThItem = styled.th`
  width: 89px;
`;

export const ThNome = styled.th`
  width: 418px;
`;

export const ThEmail = styled.th`
  width: 429px;
`;

export const ThTipo = styled.th`
  width: 430px;
`;

export const ThExcluir = styled.th`
  width: 233px;
`;

export const TbItem = styled.td`
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  background-color: #2FC18C;
  border-radius: 10px 0px 0px 10px;
  width: 90px;
`;

export const TbNome = styled.td`
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  text-indent: 20px;
  background-color: #EAF1EF;
  width: 423px;
`;

export const TbEmail = styled.td`
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  color: #F2FFFC;
  background-color: #036B52;
  width: 423px;
`;

export const TbTipo = styled.td`
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  color: #F2FFFC;
  background-color: #421981;
  width: 423px;
`;

export const TbExcluir = styled.button`
  cursor: pointer;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  color: #F2FFFC;
  background-color: #056CF9;
  border: none;
  width: 238px;
  padding: 10px;
  border-radius: 0px 10px 10px 0px;
`;
