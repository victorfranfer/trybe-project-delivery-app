import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductSale } from '../Services/Request';

export default function SellerOrderDetailCard() {
  const [orderInfo, setOrderInfo] = useState({});
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchOrders = async () => {
      console.log(id);
      const order = await getProductSale(`/seller/orders/${id}`, { params: id });
      console.log(order);
      setOrderInfo(order);
      setProducts(order.products);
    };
    fetchOrders();
  }, []);

  console.log(products);

  function formattedCurrentDate(data) {
    const newDate = new Date(data);
    const dia = newDate.getDate().toString();
    const diaF = (dia.length === 1) ? `0${dia}` : dia;
    const mes = (newDate.getMonth() + 1).toString(); // +1 pois no getMonth Janeiro começa com zero.
    const mesF = (mes.length === 1) ? `0${mes}` : mes;
    const anoF = newDate.getFullYear();
    return `${diaF}/${mesF}/${anoF}`;
  }

  return (
    <section className="order-detail">
      <p>Detalhe do Pedido</p>
      <span data-testid="seller_order_details__element-order-details-label-ordr-id">
        Pedido
        { orderInfo.id }
      </span>
      <span data-testid="seller_order_details__element-order-details-label-order-date">
        {formattedCurrentDate(orderInfo.saleDate)}
      </span>
      <span
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        { orderInfo.status }
      </span>
      <button type="button" data-testid="seller_order_details__button-preparing-check">
        Preparar pedido
      </button>
      <button type="button" data-testid="seller_order_details___button-dispatch-check">
        Saiu para entrega
      </button>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product, i) => (
              <tr key={ i }>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-item-number-${i + 1}`
                  }
                >
                  {i + 1}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-name-${i + 1}`
                  }
                >
                  {product.name}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-quantity-${i + 1}`
                  }
                >
                  {product.SaleProduct.quantity}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-unit-price-${i + 1}`
                  }
                >
                  {product.price}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-subtotal-${i + 1}`
                  }
                >
                  {(product.SaleProduct.quantity * product.price).toFixed(2)}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <span data-testid="seller_order_details__element-order-total-price">
        Total: R$
        {orderInfo.totalPrice}
      </span>
    </section>
  );
}
