import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CheckoutTable } from '../Pages/Styles/clientCheckout';
import { OrderSection } from '../Pages/Styles/orderId';
import { getProductSale, put } from '../Services/Request';
import OrderDetailTable from './OrderDetailTable';
import { OrderItemDiv } from './Styles/saleOrderDetail';

export default function SellerOrderDetailCard() {
  const [orderInfo, setOrderInfo] = useState({});
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(0);
  const [preparingDisabled, setPreparingDisabled] = useState(false);
  const [deliveryDisabled, setDeliveryDisabled] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchOrders = async () => {
      const order = await getProductSale(`/seller/orders/${id}`, { params: id });
      console.log(order);
      setOrderInfo(order);
      setProducts(order.products);
      if (order.status === 'Preparando') {
        setPreparingDisabled(true);
        setDeliveryDisabled(false);
      }
      if (order.status === 'Em Trânsito' || order.status === 'Entregue') {
        setPreparingDisabled(true);
        setDeliveryDisabled(true);
      }
    };
    fetchOrders();
  }, [reload]);

  function formattedCurrentDate(data) {
    const newDate = new Date(data);
    const dia = newDate.getDate().toString();
    const diaF = (dia.length === 1) ? `0${dia}` : dia;
    const mes = (newDate.getMonth() + 1).toString(); // +1 pois no getMonth Janeiro começa com zero.
    const mesF = (mes.length === 1) ? `0${mes}` : mes;
    const anoF = newDate.getFullYear();
    return `${diaF}/${mesF}/${anoF}`;
  }

  function formatPrice(price) {
    const totalPrice = price;
    if (totalPrice) {
      return totalPrice.replace('.', ',');
    }
  }

  const updateStatus = async () => {
    if (!preparingDisabled) {
      await put(`/sale/order/${id}`, { status: 'Preparando' });
      setReload((prev) => prev + 1);
      setPreparingDisabled(true);
      setDeliveryDisabled(false);
    }
    if (!deliveryDisabled) {
      await put(`/sale/order/${id}`, { status: 'Em Trânsito' });
      setReload((prev) => prev + 1);
      setPreparingDisabled(true);
      setDeliveryDisabled(true);
    }
  };

  if (!orderInfo) {
    return <p>Carregando...</p>;
  }
  
  return (
    <OrderSection className="order-detail">
      <div>
        <p>Detalhe do Pedido</p>
      </div>
      <div>
        <div data-testid="seller_order_details__element-order-details-label-order-id">
          <p>
            Pedido
            { orderInfo.id }
          </p>
          <span data-testid="seller_order_details__element-order-details-label-order-date">
            {formattedCurrentDate(orderInfo.saleDate)}
          </span>
          <span
            data-testid="seller_order_details__element-order-details-label-delivery-status"
          >
            { orderInfo.status }
          </span>
          <button
            type="button"
            data-testid="seller_order_details__button-preparing-check"
            onClick={ updateStatus }
            disabled={ preparingDisabled }
          >
            Preparar pedido
          </button>
          <button
            type="button"
            data-testid="seller_order_details__button-dispatch-check"
            onClick={ updateStatus }
            disabled={ deliveryDisabled }
          >
            Saiu para entrega
          </button>
        </div>

        <CheckoutTable>
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
              products.map((product, i) => 
                (<OrderDetailTable
                  key={ `${product.name}-${i}` }
                  product={ product }
                  index={ i } />
              ))
              // products.map((product, i) => (
              //   <tr key={ i }>
              //     <td
              //       data-testid={
              //         `seller_order_details__element-order-table-item-number-${i + 1}`
              //       }
              //     >
              //       {i + 1}
              //     </td>
              //     <td
              //       data-testid={
              //         `seller_order_details__element-order-table-name-${i + 1}`
              //       }
              //     >
              //       {product.name}
              //     </td>
              //     <td
              //       data-testid={
              //         `seller_order_details__element-order-table-quantity-${i + 1}`
              //       }
              //     >
              //       {product.SaleProduct.quantity}
              //     </td>
              //     <td
              //       data-testid={
              //         `seller_order_details__element-order-table-unit-price-${i + 1}`
              //       }
              //     >
              //       {product.price}
              //     </td>
              //     <td
              //       data-testid={
              //         `seller_order_details__element-order-table-subtotal-${i + 1}`
              //       }
              //     >
              //       {(product.SaleProduct.quantity * product.price).toFixed(2)}
              //     </td>
              //   </tr>
              // ))
            }
          </tbody>
        </CheckoutTable>
        <div>
      </div>
        <span data-testid="seller_order_details__element-order-total-price">
          Total: R$
          {formatPrice(orderInfo.totalPrice)}
        </span>
      </div>
    </OrderSection>
  );
}
