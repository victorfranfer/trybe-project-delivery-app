import { Link } from 'react-router-dom';
import { getUserInfo } from '../Services/Storage';
import { HeaderNav, NavLink } from './Styles/header'

export default function Header() {
  const { name } = getUserInfo();

  return (
    <HeaderNav>
      <div>
        <Link
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"
        >
          <NavLink color="#2FC18C">
            PRODUTOS
          </NavLink>
        </Link>
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to="/customer/orders"
        >
          <NavLink color="#036B52">
            MEUS PEDIDOS
          </NavLink>
        </Link>
      </div>
      <div>
        <p
          data-testid="customer_products__element-navbar-user-full-name"
          to="/"
        >
          <NavLink color="#421981">
            { name }
          </NavLink>
        </p>
        <Link
          data-testid="customer_products__element-navbar-link-logout"
          to="/"
          onClick={ () => localStorage.clear() }
        >
          <NavLink color="#056CF9" sair={ true }>
            SAIR
          </NavLink>
        </Link>
      </div>
    </HeaderNav>
  );
}
