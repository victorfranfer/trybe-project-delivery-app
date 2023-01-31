import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
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
              data-testid="customer_order_details__element-order-details-label-seller-name"
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
                  `customer_order_details__element-order-details-label-delivery-status${order.status}` }
            >
              {order.status}
            </p>
            <button
              disabled={updated}
              onClick={updateStatus}
              data-testid="customer_order_details__button-delivery-check"
            >
              MARCAR COMO ENTREGUE
            </button>
          </div>
          <table>
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
            {order.products.map((product, index) => (
              <tbody key={`element-table-key-${index}`}>
                <tr>
                  <td
                    data-testid={
                      `customer_order_details__element-order-table-item-number-${index}`}
                  >
                    {index + 1}
                  </td>
                  <td
                    data-testid={`customer_order_details__element-order-table-name-${index}`}
                  >
                    {product.name}
                  </td>
                  <td
                    data-testid={`customer_order_details__element-order-table-quantity-${index}`}
                  >
                    {product.SaleProduct.quantity}
                  </td>
                  <td
                    data-testid={`ustomer_order_details__element-order-table-unit-price-${index}`}
                  >
                    {product.price.toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                    })}
                  </td>
                  <td
                    data-testid={`customer_order_details__element-order-table-sub-total-${index}`}
                  >
                    {(
                      product.price * product.SaleProduct.quantity
                    ).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <p data-testid="customer_order_details__element-order-total-price">
          Total:{" "}
          {Number(order.totalPrice).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </section>
    </>
  );
}

export default OrderId;
