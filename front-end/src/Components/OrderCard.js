import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { requestOrders } from '../Services/Request';
import { getUserInfo } from '../Services/Storage';
import { OrderItemDiv, Orders } from './Styles/saleOrderItem';
// import { AppContext } from '../Context/orderProvider';

export default function OrdersCard() {
  // const { order, setOrder } = useContext(AppContext);
  const [ordersList, setOrdersList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchOrders = async () => {
      const { id } = getUserInfo();
      const orders = await requestOrders('/seller/orders', { id });
      setOrdersList(orders);

      if (orders.sellerId === id) {
        setOrdersList(orders);
      }
    };
    fetchOrders();
  }, []);

  function dataAtualFormatada(data) {
    const newDate = new Date(data);
    const dia = newDate.getDate().toString();
    const diaF = (dia.length === 1) ? `0${dia}` : dia;
    const mes = (newDate.getMonth() + 1).toString(); // +1 pois no getMonth Janeiro começa com zero.
    const mesF = (mes.length === 1) ? `0${mes}` : mes;
    const anoF = newDate.getFullYear();
    return `${diaF}/${mesF}/${anoF}`;
  }

  // const handleClick = (orderInfo) => {
  //   saveOrder(orderInfo);
  //   setOrder(orderInfo);
  // };

  return (
    <Orders className="orders-list">
      {
        ordersList.map((sales) => (
          <button
              type="button"
              onClick={ () => history.push(`/seller/orders/${sales.id}`) }
            >
            <OrderItemDiv status={ sales.status } className="order-card">
              <div data-testid={ `seller_orders__element-order-id-${sales.id}` }>
                <p>Pedido</p>
                <p>{ sales.id }</p>
              </div>
              <span data-testid={ `seller_orders__element-delivery-status-${sales.id}` }>
                { sales.status }
              </span>
              <div>
                <p data-testid={ `seller_order__element-order-date-${sales.id}` }>
                  { dataAtualFormatada(sales.saleDate) }
                </p>
                <p data-testid={ `seller_orders__element-card-price-${sales.id}` }>
                  { sales.totalPrice }
                </p>
              <p data-testid={ `seller_orders__element-card-address-${sales.id}` }>
                { sales.deliveryAddress }
              </p>
              </div>
            </OrderItemDiv>
          </button>
        ))
      }
    </Orders>
  );
}
