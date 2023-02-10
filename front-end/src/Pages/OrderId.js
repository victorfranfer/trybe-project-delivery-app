import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import OrderDetailTable from '../Components/OrderDetailTable';
import { get, put } from '../Services/Request';
import { CheckoutTable } from './Styles/clientCheckout';
import { OrderSection } from './Styles/orderId';

function OrderId() {
  const { id } = useParams();
  const [order, setOrder] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [reload, setReload] = useState(0);

  function dataAtualFormatada(data) {
    const newDate = new Date(data);
    const dia = newDate.getDate().toString();
    const diaF = dia.length === 1 ? `0${dia}` : dia;
    const mes = (newDate.getMonth() + 1).toString(); // +1 pois no getMonth Janeiro começa com zero.
    const mesF = mes.length === 1 ? `0${mes}` : mes;
    const anoF = newDate.getFullYear();
    return `${diaF}/${mesF}/${anoF}`;
  }

  useEffect(() => {
    const getSale = async () => {
      const newOrder = await get(`/sale/order/${id}`);
      setOrder(newOrder);
      if (newOrder.status !== 'Em Trânsito') {
        setUpdated(true);
      }
    };
    getSale();
  }, [reload]);

  const updateStatus = async () => {
    setUpdated(true);
    await put(`/sale/order/${id}`);
    setReload((prev) => prev + 1);
  };

  const testId = 'customer_order_details';

  if (!order) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Header />
      <OrderSection>
        <div>
          <p>Detalhes do pedido</p>
        </div>
        <div>
          <div>
            <p data-testid="customer_order_details__element-order-details-label-order-id">
              PEDIDO:
              {order.id}
            </p>
            <p
              data-testid={ `${testId}__element-order-details-label-seller-name` }
            >
              P. Vend:
              {order.seller.name}
            </p>
            <p
              data-testid="customer_order_details__element-order-details-label-order-date"
            >
              {dataAtualFormatada(order.saleDate)}
            </p>
            <p
              data-testid={
                `${testId}__element-order-details-label-delivery-status${order.status}`
              }
            >
              {order.status}
            </p>
            <button
              type="button"
              disabled={ updated }
              onClick={ updateStatus }
              data-testid="customer_order_details__button-delivery-check"
            >
              MARCAR COMO ENTREGUE
            </button>
          </div>
          <CheckoutTable>
            <colgroup span="5" className="columns" />
            <thead>
              <tr>
                <th>Item</th>
                <th>Descrição</th>
                <th>Quantidade</th>
                <th>Valor unitário</th>
                <th>Sub-total</th>
              </tr>
            </thead>
            <tbody>
              {
                order.products.map((product, index) => (
                  <OrderDetailTable
                    key={ `${product.name}-${index}` }
                    product={ product }
                    index={ index }
                  />
                ))
              }
            </tbody>
          </CheckoutTable>
        </div>
        <div>
          <span data-testid="customer_order_details__element-order-total-price">
            Total:
            {' '}
            {Number(order.totalPrice).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
      </OrderSection>
    </>
  );
}

export default OrderId;
