import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Components/Header';
import ProductCard from '../Components/ProductCard';
import { AppContext } from '../Context/provider';
import { requestProducts } from '../Services/Request';
import { requestToken, setToken } from '../Services/Request';
import { getUserInfo } from '../Services/Storage';

const calculateTotalPrice = (cart) => {
  let totalPrice = 0;
  cart.forEach((item) => { totalPrice += item.subTotal; });
  return totalPrice;
};

export default function Products() {
  // useEffect(() => {
  //   const checkToken = async () => {
  //     const { token } = getUserInfo();
  //     setToken(token);
  //     await requestToken();
  //   };
  //   checkToken();
  // }, []);
  const [productsList, setProductsList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const history = useHistory();

  const { cart } = useContext(AppContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await requestProducts('/products');
      setProductsList(products);
      console.log(productsList);
      
    };
    fetchProducts();
    console.log(productsList);
  }, []);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice(cart));
  }, [cart]);

  return (
    <>
      <Header />
      <section className="product-list">
        {productsList.map((product) => (<ProductCard product={product}/>))}
      </section>
      <button
      disabled={
        totalPrice === 0
      }
      onClick={() => {
        history.push('/customer/checkout');
      }}
      data-testid="customer_products__button-cart">Ver Carrinho: R$
        <p data-testid="customer_products__checkout-bottom-value">
           {Number(totalPrice).toLocaleString('pt-br', {minimumFractionDigits: 2})}
          </p></button>
    </>
  );
}
