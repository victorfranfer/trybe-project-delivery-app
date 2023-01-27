import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestLogin } from '../Services/Request';
import { saveUserInfo } from '../Services/Storage';

function Login() {
  const [data, setData] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState(false);
  const [disable, setDisable] = useState(true);

  const navigate = useHistory();

  const saveInfoAndRedirect = (userInfo) => {
    const { role } = userInfo;
    saveUserInfo(userInfo);

    const path = {
      customer: '/customer/products',
      administrator: '/admin/manage',
      seller: '/seller/orders',
    };

    return navigate.push(path[role]);
  };

  async function HandleClick() {
    const { email, password } = data;

    try {
      const userInfo = await requestLogin(
        '/login',
        { email, password },
      );

      saveInfoAndRedirect(userInfo);
    } catch (error) {
      setLoginError(true);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    const handleEnableButton = () => {
      const emailRegex = /^[a-z0-9._-]+@[a-z0-9]+\.[a-z]/i;
      const minLengthPassword = 6;

      if (data.password.length >= minLengthPassword
        && emailRegex.test(data.email)) setDisable(false);
      else setDisable(true);
    };

    handleEnableButton();
  }, [data]);

  return (
    <div>
      <div>
        <img src="" alt="Logo do app" />
      </div>
      <div>
        <form>
          <label htmlFor="email">
            Login:
            <input
              type="email"
              name="email"
              data-testid="common_login__input-email"
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              data-testid="common_login__input-password"
              onChange={ handleChange }
            />
          </label>

          <button
            type="button"
            data-testid="common_login__button-login"
            disabled={ disable }
            onClick={ HandleClick }
          >
            LOGIN
          </button>
          <button
            type="button"
            data-testid="common_login__button-register"
            onClick={ () => navigate.push('/register') }
          >
            Ainda não tenho conta
          </button>
        </form>
      </div>
      {
        loginError && (
          <div>
            <span data-testid="common_login__element-invalid-email">
              Falha ao fazer login!
            </span>
          </div>
        )
      }
    </div>
  );
}

export default Login;
