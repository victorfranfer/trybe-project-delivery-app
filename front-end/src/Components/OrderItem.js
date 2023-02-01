import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestOrders } from '../Services/Request';
import { getUserInfo } from '../Services/Storage';

export default function OrdersItem() {
  const [orderList, setOrderList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchOrders = async () => {
      const { id } = getUserInfo();
      const orders = await requestOrders('/customer/orders', { id });
      setOrderList(orders);
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

  return (
    <div className="order-list">
      {
        orderList.map((element, index) => (
          <div className="customer-order" key={ index }>
            <button
              type="button"
              onClick={ () => history.push(`/customer/orders/${element.id}`) }
            >
              <div>
                <span
                  data-testid={ `customer_orders__element-order-id-${element.id}` }
                >
                  Pedido
                  {element.id}
                </span>
                <span
                  data-testid={ `customer_orders__element-delivery-status-${element.id}` }
                >
                  {element.status}
                </span>
                <span
                  data-testid={ `customer_orders__element-order-date-${element.id}` }
                >
                  {dataAtualFormatada(element.saleDate)}
                </span>
                <span
                  data-testid={ `customer_orders__element-card-price-${element.id}` }
                >
                  {element.totalPrice.replace('.', ',')}
                </span>
              </div>
            </button>
          </div>
        ))
      }
    </div>
  );
}
