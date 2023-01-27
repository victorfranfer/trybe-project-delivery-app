import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Components/Header';
import { AppContext } from '../Context/provider';
import { createNewSale, requestSellers } from '../Services/Request';

const calculateTotalPrice = (cart) => {
  let totalPrice = 0;
  cart.forEach((item) => { totalPrice += item.subTotal; });
  return totalPrice;
};

function ClientCheckout() {
  const [address, setAddress] = useState('');
  const [residenceNumber, setResidenceNumber] = useState('');
  const [sellers, setSellers] = useState([]);

  const { cart, setCart, setTotalPrice, totalPrice } = useContext(AppContext);

  const history = useHistory();

  useEffect(() => {
    const getSellers = async () => {
      const sellersData = await requestSellers('/user/sellers');
      setSellers(sellersData);
    }

    getSellers();
  }, []);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice(cart));
  }, [cart]);

  const removeItem = ({ target }) => {
    console.log(target.value);
    const { value } = target;
    const newCart = [...cart].filter((item) => item.productId !== Number(value));
    setCart(newCart);
  };

  const endOrder = async () => {
    const body = {
      productIds: cart,
      sellerId: 1,
      userId: 1,
      totalPrice,
      deliveryAddress: address,
      deliveryNumber: residenceNumber,
    };

    await createNewSale('/sale/register-order', body);
    history.push('/customer/orders');
  };

  return (
    <div>
    <Header />
      <h2>Finalizar Pedido</h2>
      <table>
        <colgroup span="6" className="columns" />
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        {cart.map((item, index) => (
          <tbody key={ `element-table-key-${index}` }>
            <tr>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-name-${index}`
                }
              >
                {item.name}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
              >
                {item.quantity}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {item.unitPrice}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {item.subTotal}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-remove-${index}`
                }
              >
                <button
                  onClick={ removeItem }
                  value={ item.productId }
                  type="button"
                >
                  Remover
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <div data-testid="customer_checkout__element-order-total-price">
        Total: R$
        {totalPrice}
      </div>
      <p>Detalhes e Endereço para Entrega</p>
      <form>
        <label htmlFor="seller">
          <select
            data-testid="customer_checkout__select-seller"
            type="select"
            id="seller"
          >
            {
              sellers.map((seller) => (
                <option>
                  {seller.name}
                </option>
              ))
            }
          </select>
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
        <button
          onClick={ endOrder }
          type="button"
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </div>
  );
}

export default ClientCheckout;
