import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { requestOrders } from '../Services/Request';
import { getUserInfo } from '../Services/Storage';
// import { AppContext } from '../Context/orderProvider';

export default function OrdersCard() {
  // const { order, setOrder } = useContext(AppContext);
  const [ordersList, setOrdersList] = useState([]);

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

  // const handleClick = (orderInfo) => {
  //   saveOrder(orderInfo);
  //   setOrder(orderInfo);
  // };

  return (
    <section className="orders-list">
      {
        ordersList.map((sales) => (
          <Link
            to={ `/seller/orders/${sales.id}` }
            key={ sales.id }
            // onClick={ handleClick }
          >
            <div className="order-card">
              <p data-testid={ `seller_orders__element-order-id-${sales.id}` }>
                Pedido
                <br />
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
          </Link>
        ))
      }
    </section>
  );
}
