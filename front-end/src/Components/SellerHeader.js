import { Link } from 'react-router-dom';
import { getUserInfo } from '../Services/Storage';

export default function SellerHeader() {
  const { name } = getUserInfo();

  return (
    <nav>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/seller/orders"
      >
        Pedidos
      </Link>
      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { name }
      </span>
      <Link
        data-testid="customer_products__element-navbar-link-logout"
        to="/"
        onClick={ () => localStorage.clear() }
      >
        Sair
      </Link>

    </nav>
  );
}
