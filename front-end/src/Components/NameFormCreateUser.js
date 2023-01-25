import React from 'react';
import PropTypes from 'prop-types';

export default function NameFormCreateUser({ createUserError }) {
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

NameFormCreateUser.propTypes = {
  createUserError: PropTypes.bool,
}.isRequired;
