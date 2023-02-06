import PropTypes from 'prop-types';
import { CheckoutTable, TableColumn } from '../Pages/Styles/clientCheckout';

export default function OrderDetailTable({ product, index }) {
  console.log(product);
  return (
        <tr>
          <TableColumn
            color="#2FC18C"
            data-testid={
              `customer_order_details__element-order-table-item-number-${index}`
            }
          >
            {index + 1}
          </TableColumn>
          <TableColumn
            color="#EAF1EF"
            data-testid={
              `customer_order_details__element-order-table-name-${index}`
            }
          >
            {product.name}
          </TableColumn>
          <TableColumn
            color="#036B52"
            data-testid={
              `customer_order_details__element-order-table-quantity-${index}`
            }
          >
            {product.SaleProduct.quantity}
          </TableColumn>
          <TableColumn
            color="#421981"
            data-testid={
              `customer_order_details__element-order-table-unit-price-${index}`
            }
          >
            {product.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </TableColumn>
          <TableColumn
            color="#056CF9"
            data-testid={
              `customer_order_details__element-order-table-sub-total-${index}`
            }
          >
            {(
              product.price * product.SaleProduct.quantity
            ).toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </TableColumn>
        </tr>
  );
}

OrderDetailTable.propTypes = {
  product: PropTypes.shape(PropTypes.any),
  index: PropTypes.number,
}.isRequired;
