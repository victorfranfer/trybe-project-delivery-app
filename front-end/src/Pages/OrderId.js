import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import OrderDetailTable from '../Components/OrderDetailTable';
import { get, put } from '../Services/Request';

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
      console.log(newOrder);
      setOrder(newOrder);
      if (newOrder.status !== 'em transito') {
        setUpdated(true);
      }
    };
    getSale();
  }, [reload]);

  const updateStatus = async () => {
    // setOrder(false);
    setUpdated(true);
    await put(`/sale/order/${id}`);
    setReload((prev) => prev + 1);
  };

  if (!order) {
    return <p>Carregando...</p>;
  }

  const testId = 'customer_order_details';

  return (
    <>
      <Header />
      <section>
        <p>Detalhes do pedido</p>
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
          {
            order.map((product, index) => (
              <OrderDetailTable
                key={ `${product.name}-${index}` }
                product={ product }
                index={ index }
              />
            ))
          }
        </div>
        <p data-testid="customer_order_details__element-order-total-price">
          Total:
          {' '}
          {Number(order.totalPrice).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      </section>
    </>
  );
}

export default OrderId;
