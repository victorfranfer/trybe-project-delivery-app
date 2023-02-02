import React, { useContext } from 'react';
import { AdminContext } from '../Context/AdminContex';

export default function NameFormCreateUser() {
  const { createUserError } = useContext(AdminContext);

  return (
    <section>
      <h2>Cadastrar novo usuário</h2>
      {
        createUserError && (
          <span
            data-testid="admin_manage__element-invalid-register"
          >
            Falha ao cadastrar usuário!
          </span>
        )
      }
    </section>
  );
}
