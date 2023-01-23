import { useState } from 'react';
import { requestRegister } from '../Services/Request';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function HandleClick() {
    const { password: token } = await
    requestRegister('/register', { email, password, name });
    console.log(token);
  }

  return (
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
        type="button"
        data-testid="common_register__button-register"
        onClick={ HandleClick }
      >
        CADASTRAR
      </button>
    </form>
  );
}
