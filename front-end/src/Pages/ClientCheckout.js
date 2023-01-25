import { useContext, useState } from 'react';
import { AppContext } from '../Context/provider';

function ClientCheckout() {
  const [address, setAddress] = useState('');
  const [residenceNumber, setResidenceNumber] = useState('');

  const { cart } = useContext(AppContext);

  return (
    <>
      <header>header</header>
      <div>
        <h2>Finalizar Pedido</h2>
        <table>
          <colgroup span="6" className="columns" />
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
          {cart.map((item, index) => (
            <tr key={ `element-table-key-${index}` }>
              <td
                data-testid={ `
                customer_checkout__element-order-table-item-number-${index}` }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `
                customer_checkout__element-order-table-name-${index}` }
              >
                {item.description}
              </td>
              <td
                data-testid={ `
                customer_checkout__element-order-table-quantity-${index}` }
              >
                {item.quantity}
              </td>
              <td
                data-testid={ `
                customer_checkout__element-order-table-unit-price-${index}` }
              >
                {item.price}
              </td>
              <td
                data-testid={ `
                customer_checkout__element-order-table-sub-total-${index}` }
              >
                {item.totalValue}
              </td>
              <td
                data-testid={ `
                customer_checkout__element-order-table-remove-${index}` }
              >
                <button type="button">Remover</button>
              </td>
            </tr>
          ))}
        </table>
        <div data-testid="customer_checkout__element-order-total-price">
          Total:
        </div>
        <p>Detalhes e Endereço para Entrega</p>
        <form>
          <label htmlFor="seller">
            <input
              data-testid="customer_checkout__select-seller"
              type="select"
              id="seller"
            />
          </label>
          <label htmlFor="address">
            <input
              data-testid="customer_checkout__input-address"
              type="text"
              id="address"
              value={ address }
              onChange={ ({ target }) => setAddress(target.value) }
            />
          </label>
          <label htmlFor="residence-number">
            <input
              data-testid="customer_checkout__input-address-number"
              type="text"
              id="residence-number"
              value={ residenceNumber }
              onChange={ ({ target }) => setResidenceNumber(target.value) }
            />
          </label>
          <button type="button">FINALIZAR PEDIDO</button>
        </form>
      </div>
    </>
  );
}

export default ClientCheckout;
