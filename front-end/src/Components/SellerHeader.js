import { Link } from 'react-router-dom';

export default function SellerHeader() {
  return (
    <nav>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/"
      >
        PEDIDOS
      </Link>
      <Link
        data-testid="customer_products__element-navbar-user-full-name"
        to="/"
      >
        NOME
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-logout"
        to="/"
      >
        SAIR
      </Link>

    </nav>
  );
}
