import React, { useEffect, useState } from 'react';
import { requestOrders } from '../Services/Request';

export default function OrdersCard() {
  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await requestOrders('/orders');
      setOrdersList(orders);
    };
    fetchOrders();
  }, []);

  console.log(ordersList);

  return (
    <section className="orders-list">
      {
        ordersList.map((order) => (
          <div className="order-card" key={ order.id }>
            <p data-testid={ `seller_orders__element-order-id-${order.id}` }>
              Pedido
              { order.id }
            </p>
            <p data-testid={ `seller_orders__element-delivery-status-${order.id}` }>
              { order.status }
            </p>
            <p data-testid={ `seller_order__element-order-date-${order.id}` }>
              { order.saleDate }
            </p>
            <p data-testid={ `seller_orders__element-card-price-${order.id}` }>
              { order.totalPrice }
            </p>
            <p data-testid={ `seller_orders__element-card-address-${order.id}` }>
              { order.deliveryAddress }
            </p>
          </div>
        ))
      }
    </section>
  );
}
