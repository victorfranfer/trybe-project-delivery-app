import { useState } from 'react';
import { requestRegister } from '../Services/Request';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [requestError, setRequestError] = useState(false);

  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
  const validEmail = emailRegex.test(email);

  async function HandleClick() {
    try {
      await requestRegister('/register', {
        email,
        password,
        name,
      });
    } catch (error) {
      setRequestError(true);
    }
  }

  return (
    <div>
      <form>
        <label htmlFor="input-name">
          Nome
          <input
            type="text"
            id="input-name"
            data-testid="common_register__input-name"
            placeholder="Seu nome"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label htmlFor="input-email">
          E-mail
          <input
            type="email"
            data-testid="common_register__input-email"
            id="input-email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="input-password">
          Password
          <input
            type="password"
            data-testid="common_register__input-password"
            id="input-password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          disabled={ !(name.length >= Number('12')
            && validEmail
            && password.length >= Number('6')) }
          type="button"
          data-testid="common_register__button-register"
          onClick={ HandleClick }
        >
          CADASTRAR
        </button>
      </form>
      { requestError && (
        <p data-testid="common_register__element-invalid_register">
          Falha ao fazer cadastro!
        </p>
      ) }
    </div>
  );
}
