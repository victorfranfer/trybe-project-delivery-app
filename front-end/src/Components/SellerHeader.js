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
      <Link
        data-testid="customer_products__element-navbar-user-full-name"
        to="/"
      >
        { name }
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-logout"
        to="/"
      >
        Sair
      </Link>

    </nav>
  );
}
