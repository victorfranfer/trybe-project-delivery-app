import React, { useEffect, useState } from 'react';
// import { requestOrders } from '../Services/Request';

export default function SellerOrderDetailCard() {
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const order = await requestOrders('/orders');
      console.log(order);

      if (order.sellerId === id) {
        setOrderDetails(order);
      }
      console.log(orderDetails);
    };
    fetchOrders();
  }, []);

  return (
    <section className="order-detail" />
  );
}
