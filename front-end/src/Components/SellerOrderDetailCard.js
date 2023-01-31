import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductSale } from '../Services/Request';

export default function SellerOrderDetailCard() {
  const [orderId, setOrderId] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchOrders = async () => {
      console.log(id);
      const order = await getProductSale('/seller/orders/', { params: id });
      console.log(order);
      setOrderId(order);
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
