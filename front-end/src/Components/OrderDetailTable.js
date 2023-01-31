import PropTypes from 'prop-types';

export default function OrderDetailTable({ product, index }) {
  return (
    <table>
      <colgroup span="5" className="columns" />
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody key={ `element-table-key-${index}` }>
        <tr>
          <td
            data-testid={
              `customer_order_details__element-order-table-item-number-${index}`
            }
          >
            {index + 1}
          </td>
          <td
            data-testid={
              `customer_order_details__element-order-table-name-${index}`
            }
          >
            {product.name}
          </td>
          <td
            data-testid={
              `customer_order_details__element-order-table-quantity-${index}`
            }
          >
            {product.SaleProduct.quantity}
          </td>
          <td
            data-testid={
              `customer_order_details__element-order-table-unit-price-${index}`
            }
          >
            {product.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </td>
          <td
            data-testid={
              `customer_order_details__element-order-table-sub-total-${index}`
            }
          >
            {(
              product.price * product.SaleProduct.quantity
            ).toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

OrderDetailTable.propTypes = {
  product: PropTypes.shape(PropTypes.any),
  index: PropTypes.number,
}.isRequired;
