import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [loginError, setLoginError] = useState(false);
  const navigate = useHistory();

  const goToRegister = () => {
    navigate.push('/register');
  };

  return (
    <div>
      <div>
        <img src="" alt="Logo do app" />
      </div>
      <div>
        <form onSubmit={  }>
          <label htmlFor="email">
            Login:
            <input
              type="email"
              name="email"
              data-testid="common_login__input-email"
            />
          </label>
          <label htmlFor="senha">
            Senha
            <input
              type="password"
              name="senha"
              data-testid="common_login__input-password"
            />
          </label>

          <button type="submit" data-testid="common_login__button-login">
            LOGIN
          </button>
          <button
            type="button"
            data-testid="common_login__button-register"
            onClick={ () => goToRegister() }
          >
            Ainda não tenho conta
          </button>
        </form>
      </div>
      {
        loginError && (
          <div>
            <span data-testid="common_login__element-invalid-email">
              Elemento oculto Mensagens de erro
            </span>
          </div>
        )
      }
    </div>
  );
}

export default Login;
