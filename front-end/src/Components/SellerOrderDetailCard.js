import React, { useEffect, useState } from 'react';
// import { requestOrders } from '../Services/Request';

export default function SellerOrderDetailCard() {
  const [orderId, setOrderId] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { id } = getUserInfo();
      const orders = await requestOrders('/seller/orders', { id });
      console.log(orders[0]);
      setOrderId(orders);
    };
    fetchOrders();
  }, []);

  return (
    <section className="order-detail">
      <p>Detalhe do Pedido</p>
      <span>
        Pedido
        { orderId }
      </span>
    </section>
  );
}
