import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <Link
        data-testid="customer_products__element-navbar-link-products"
        to="/"
      >
        PRODUTOS
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/"
      >
        MEUS PEDIDOS
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
