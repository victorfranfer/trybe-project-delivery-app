import React, { useContext, useEffect, memo } from 'react';
import { AdminContext } from '../Context/AdminContex';
import { AdminTable, TbEmail, TbExcluir, TbItem, TbNome, TbTipo, ThEmail,
  ThExcluir, ThItem, ThNome, ThTipo,
} from '../Pages/Styles/admin';
import { requestAllUsers, requestDeleteUser } from '../Services/Request';
import { getUserInfo } from '../Services/Storage';

function UserTable() {
  const { users, setUsers } = useContext(AdminContext);

  useEffect(() => {
    const getUsers = async () => {
      const { token } = getUserInfo();

      const usersRequested = await requestAllUsers(
        '/user',
        { headers: { Authorization: token } },
      );

      setUsers(usersRequested);
    };
    getUsers();
  }, []);

  const handleClick = async (email) => {
    const { token } = getUserInfo();

    const usersWithoutDeleted = await requestDeleteUser(
      '/user',
      {
        data: { email },
        headers: { Authorization: token },
      },
    );

    setUsers(usersWithoutDeleted);
  };

  return (
    <AdminTable>
      <thead>
        <tr>
          <ThItem>Item</ThItem>
          <ThNome>Nome</ThNome>
          <ThEmail>E-mail</ThEmail>
          <ThTipo>Tipo</ThTipo>
          <ThExcluir>Excluir</ThExcluir>
        </tr>
      </thead>
      <tbody>
        {
          users && (users.map((user, index) => (
            <tr key={ index }>
              <TbItem
                data-testid={
                  `admin_manage__element-user-table-item-number-${index}`
                }
              >
                { index + 1 }
              </TbItem>
              <TbNome data-testid={ `admin_manage__element-user-table-name-${index}` }>
                { user.name }
              </TbNome>
              <TbEmail data-testid={ `admin_manage__element-user-table-email-${index}` }>
                { user.email }
              </TbEmail>
              <TbTipo data-testid={ `admin_manage__element-user-table-role-${index}` }>
                { user.role === 'seller' ? 'P.Vendedora' : 'Cliente' }
              </TbTipo>
              <td data-testid={ `admin_manage__element-user-table-remove-${index}` }>
                <TbExcluir
                  type="button"
                  onClick={ ({ target: { parentNode: { previousSibling } } }) => {
                    handleClick(previousSibling.previousSibling.innerHTML);
                  } }
                >
                  Excluir
                </TbExcluir>
              </td>
            </tr>
          )))
        }
      </tbody>
    </AdminTable>
  );
}

export default memo(UserTable);
