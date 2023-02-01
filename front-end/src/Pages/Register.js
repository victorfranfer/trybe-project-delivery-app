import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestRegister } from '../Services/Request';
import { saveUserInfo } from '../Services/Storage';
import { FilledButton, LoginForm, LoginPage } from './Styles/login';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [requestError, setRequestError] = useState(false);

  const emailRegex = /^[a-z0-9._-]+@[a-z0-9]+\.[a-z]/i;
  const validEmail = emailRegex.test(email);
  const history = useHistory();

  function buttonDisable({ target }) {
    setEmail(target.value);
    setRequestError(false);
  }

  const saveInfoAndRedirect = (userInfo) => {
    const { role } = userInfo;

    saveUserInfo(userInfo);

    const path = {
      customer: '/customer/products',
      administrator: '/admin/manage',
      seller: '/seller/orders',
    };

    return history.push(path[role]);
  };

  async function HandleClick() {
    try {
      const { id: _, ...userWithoutId } = await requestRegister('/register', {
        email,
        password,
        name,
      });

      saveInfoAndRedirect(userWithoutId);
    } catch (error) {
      setRequestError(true);
    }
  }

  return (
    <LoginPage>
      <LoginForm>
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
            onChange={ buttonDisable }
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
          <FilledButton>
            CADASTRAR
          </FilledButton>
        </button>
      </LoginForm>
      { requestError && (
        <p data-testid="common_register__element-invalid_register">
          Falha ao fazer cadastro!
        </p>
      ) }
    </LoginPage>
  );
}
