import React, { useEffect, useState } from 'react';

export default function FormCreateUser() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'seller',
  });
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    const handleEnableButton = () => {
      const emailRegex = /^[a-z0-9._-]+@[a-z0-9]+\.[a-z]/i;
      const minLengthPassword = 6;
      const minLengthName = 12;
      if (data.password.length >= minLengthPassword
        && data.name.length >= minLengthName
        && emailRegex.test(data.email)) setDisable(false);
      else setDisable(true);
    };

    handleEnableButton();
  }, [data]);

  return (
    <section>
      <form>
        <label htmlFor="admin-nome">
          Nome Completo
          <input
            type="text"
            id="admin-nome"
            data-testid="admin_manage__input-name"
            onChange={ ({ target: { value } }) => setData({ ...data, name: value }) }
          />
        </label>
        <label htmlFor="admin-email">
          Email
          <input
            type="email"
            id="admin-email"
            data-testid="admin_manage__input-email"
            onChange={ ({ target: { value } }) => setData({ ...data, email: value }) }
          />
        </label>
        <label htmlFor="admin-senha">
          Senha
          <input
            type="password"
            id="admin-senha"
            data-testid="admin_manage__input-password"
            onChange={ ({ target: { value } }) => setData({ ...data, password: value }) }
          />
        </label>
        <label htmlFor="admin-select">
          Tipo
          <select
            id="admin-select"
            defaultValue="role"
            data-testid="admin_manage__select-role"
            onChange={ ({ target: { value } }) => setData({ ...data, role: value }) }
          >
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ disable }
          // onClick={ HandleClick }
        >
          CADASTRAR
        </button>
      </form>
    </section>
  );
}
