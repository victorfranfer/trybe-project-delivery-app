import React, { useEffect, useState } from 'react';
import { requestOrders } from '../Services/Request';

export default function ordersCard() {
  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await requestProducts('/orders');
      setProductsList(orders);
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
            <div className="quantity-buttons">
              <button
                type="button"
                datatest-id={ `customer_products__button-card-rm-item-${product.id}` }
              >
                -
              </button>
              <span
                data-testid={ `customer_products__input-card-quantity-${product.id}` }
              >
                quantidade
              </span>
              <button
                type="button"
                datatest-id={ `customer_products__button-card-add-item-${product.id}` }
              >
                +
              </button>
            </div>
          </div>
        ))
      }
    </section>
  );
}
