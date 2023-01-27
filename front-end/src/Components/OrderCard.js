import React, { useEffect, useState } from 'react';
import { requestOrders } from '../Services/Request';
import { getUserInfo } from '../Services/Storage';

export default function OrdersCard() {
  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await requestOrders('/orders');
      console.log(orders);
      const userInfo = getUserInfo();
      const { id } = userInfo;

      if (orders.sellerId === id) {
        setOrdersList(orders);
      }
    };
    fetchOrders();
  }, []);

  console.log(ordersList);

  return (
    <section className="orders-list">
      {
        ordersList.map((sales) => (
          <div className="order-card" key={ sales.id }>
            <p data-testid={ `seller_orders__element-order-id-${sales.id}` }>
              Pedido
              { sales.id }
            </p>
            <p data-testid={ `seller_orders__element-delivery-status-${sales.id}` }>
              { sales.status }
            </p>
            <p data-testid={ `seller_order__element-order-date-${sales.id}` }>
              { sales.saleDate }
            </p>
            <p data-testid={ `seller_orders__element-card-price-${sales.id}` }>
              { sales.totalPrice }
            </p>
            <p data-testid={ `seller_orders__element-card-address-${sales.id}` }>
              { sales.deliveryAddress }
            </p>
          </div>
        ))
      }
    </section>
  );
}
