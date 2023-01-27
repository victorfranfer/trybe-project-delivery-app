import React, { useEffect, useState } from 'react';
import { requestOrders } from '../Services/Request';

export default function OrdersItem() {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await requestOrders('/orders');
      setOrderList(orders);
    };
    fetchOrders();
  }, []);

  return (
    <div className="order-list">
      {
        orderList.map((element, index) => (
          <div className="customer-order" key={ index }>
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
                data-testid={ `customer_orders__element-order-date${element.id}` }
              >
                {element.saleDate}
              </span>
              <span
                data-testid={ `customer_orders__element-card-price${element.id}` }
              >
                {element.totalPrice}
              </span>
            </div>
          </div>
        ))
      }
    </div>
  );
}
