import React, { useEffect } from 'react';

export default function UserTable() {
  useEffect(() => {
    const getUsers = () => {

    };
    getUsers();
  }, []);
  return (
    <section>
      <table>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
        {
          users.map((user, index) => (
            <tr key={ index }>
              <td data-testid={ `admin_manage__element-user-table-item-number-${index}` }>
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
          ))
        }
      </table>
    </section>
  );
}
