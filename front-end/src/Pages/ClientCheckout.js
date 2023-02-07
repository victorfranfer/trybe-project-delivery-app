import { useContext, useEffect, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import Header from '../Components/Header';
import { AppContext } from '../Context/provider';
import {
  createNewSale,
  requestUser,
  requestSellers,
  validateToken,
} from '../Services/Request';
import { getUserInfo, saveCart } from '../Services/Storage';
import { CheckoutForm, CheckoutTable, ClientCheckoutDiv, TableColumn } from './Styles/clientCheckout';

const calculateTotalPrice = (cart) => {
  let totalPrice = 0;
  cart.forEach((item) => { totalPrice += item.subTotal; });
  return totalPrice;
};

function ClientCheckout() {
  const [address, setAddress] = useState('');
  const [residenceNumber, setResidenceNumber] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [sellers, setSellers] = useState([]);
  const [sellerId, setSellerId] = useState();

  const { cart, setCart } = useContext(AppContext);

  const history = useHistory();

  useEffect(() => {
    const getSellers = async () => {
      const sellersData = await requestSellers('/user/sellers');
      setSellerId(sellersData[0].id);
      setSellers(sellersData);
    };

    getSellers();
  }, []);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice(cart));
  }, [cart]);

  const removeItem = ({ target }) => {
    const { value } = target;
    const newCart = [...cart].filter((item) => item.productId !== Number(value));
    setCart(newCart);
  };

  const endOrder = async () => {
    try {
      validateToken();
      const { email } = await getUserInfo();
      const { id } = await requestUser('/user/email', { email });
      const body = {
        productIds: cart,
        sellerId,
        userId: Number(id),
        totalPrice,
        deliveryAddress: address,
        deliveryNumber: residenceNumber,
      };
      const { saleId } = await createNewSale('/sale/register-order', body);
      saveCart([]);
      history.push(`/customer/orders/${saleId}`);
    } catch (err) {
      Redirect('/login');
    }
  };

  return (
    <ClientCheckoutDiv>
      <Header />
      <div>
        <h2>Finalizar Pedido</h2>
      </div>
      <CheckoutTable>
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
              <TableColumn
                color="#2FC18C"
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </TableColumn>
              <TableColumn
                color="#EAF1EF"
                data-testid={
                  `customer_checkout__element-order-table-name-${index}`
                }
              >
                {item.name}
              </TableColumn>
              <TableColumn
                color="#036B52"
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
              >
                {item.quantity}
              </TableColumn>
              <TableColumn
                color="#421981"
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
                >
                {item.unitPrice.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
              </TableColumn>
              <TableColumn
                color="#056CF9"
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {item.subTotal.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
              </TableColumn>
              <TableColumn
                color="#2FC18C"
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
              </TableColumn>
            </tr>
          </tbody>
        ))}
      </CheckoutTable>
      <div>
        <span data-testid="customer_checkout__element-order-total-price">
          Total: R$
          {totalPrice.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
        </span>
      </div>
      <div>
      <p>Detalhes e Endereço para Entrega</p>
      </div>
      <CheckoutForm>
        <div>
          <label htmlFor="seller">
            P. Vendedora Responsável:
            <select
              data-testid="customer_checkout__select-seller"
              type="select"
              id="seller"
              onClick={ ({ target }) => setSellerId(target.value) }
            >
              {
                sellers.map((seller) => (
                  <option value={ seller.id } key={ seller.name }>
                    {seller.name}
                  </option>
                ))
              }
            </select>
          </label>
          <label htmlFor="address">
            Endereço:
            <input
              data-testid="customer_checkout__input-address"
              type="text"
              id="address"
              value={ address }
              onChange={ ({ target }) => setAddress(target.value) }
            />
          </label>
          <label htmlFor="residence-number">
            Número:
            <input
              data-testid="customer_checkout__input-address-number"
              type="text"
              id="residence-number"
              value={ residenceNumber }
              onChange={ ({ target }) => setResidenceNumber(target.value) }
            />
          </label>
        </div>
        <button
          data-testid="customer_checkout__button-submit-order"
          onClick={ endOrder }
          type="button"
        >
          FINALIZAR PEDIDO
        </button>
      </CheckoutForm>
    </ClientCheckoutDiv>
  );
}

export default ClientCheckout;
