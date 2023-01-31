import React, { useEffect, useState } from 'react';
import { requestOrders } from '../Services/Request';
import { getUserInfo } from '../Services/Storage';

export default function OrdersCard() {
  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { id } = getUserInfo();
      const orders = await requestOrders('/seller/orders', { id });
      setOrdersList(orders);

      if (orders.role === 'seller' && orders.sellerId === id) {
        setOrdersList(orders);
      }
    };
    fetchOrders();
  }, []);

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
