import { Link } from 'react-router-dom';
import { getUserInfo } from '../Services/Storage';

export default function Header() {
  const { name } = getUserInfo();

  return (
    <nav>
      <Link
        data-testid="customer_products__element-navbar-link-products"
        to="/customer/products"
      >
        PRODUTOS
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/customer/orders"
      >
        MEUS PEDIDOS
      </Link>
      <p
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { name }
      </p>
      <Link
        data-testid="customer_products__element-navbar-link-logout"
        to="/"
        onClick={ () => localStorage.clear() }
      >
        SAIR
      </Link>

    </nav>
  );
}
