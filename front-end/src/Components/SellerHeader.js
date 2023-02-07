import { Link } from 'react-router-dom';
import { getUserInfo, saveUserInfo } from '../Services/Storage';
import { HeaderNav, NavLink } from './Styles/header';

export default function SellerHeader() {
  const { name } = getUserInfo();

  return (
    <HeaderNav>
      <div>
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to="/seller/orders"
        >
          <NavLink color="#2FC18C">
            Pedidos
          </NavLink>
        </Link>
        </div>
        <div>
          <p
            data-testid="customer_products__element-navbar-user-full-name"
            >
            <NavLink color="#421981">
                { name }
            </NavLink>
          </p>
          <Link
            data-testid="customer_products__element-navbar-link-logout"
            to="/"
            onClick={ () => saveUserInfo({}) }
            >
            <NavLink color="#056CF9" sair={ true }>
                SAIR
            </NavLink>
          </Link>
        </div>
    </HeaderNav>
  );
}
