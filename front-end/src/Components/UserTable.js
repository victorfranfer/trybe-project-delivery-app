import React, { useContext, useEffect, memo } from 'react';
import { AdminContext } from '../Context/AdminContex';
import { requestAllUsers } from '../Services/Request';
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
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            users && (users.map((user, index) => (
              <tr key={ index }>
                <td
                  data-testid={
                    `admin_manage__element-user-table-item-number-${index}`
                  }
                >
                  { index + 1 }
                </td>
                <td data-testid={ `admin_manage__element-user-table-name-${index}` }>
                  { user.name }
                </td>
                <td data-testid={ `admin_manage__element-user-table-email-${index}` }>
                  { user.email }
                </td>
                <td data-testid={ `admin_manage__element-user-table-role-${index}` }>
                  { user.role === 'seller' ? 'P.Vendedora' : 'Cliente' }
                </td>
                <td data-testid={ `admin_manage__element-user-table-remove-${index}` }>
                  <button type="button">
                    Excluir
                  </button>
                </td>
              </tr>
            )))
          }
        </tbody>
      </table>
    </section>
  );
}

export default memo(UserTable);
