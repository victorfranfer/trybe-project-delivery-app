import React, { useState } from 'react';

export default function NameFormCreateUser() {
  const [createUserError, setCreateUserError] = useState(false);
  console.log(setCreateUserError);
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
