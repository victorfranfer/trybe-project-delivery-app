import { useContext, useEffect, useState } from 'react';
import Header from '../Components/Header';
import ProductCard from '../Components/ProductCard';
import { AppContext } from '../Context/provider';
import { requestProducts } from '../Services/Request';
// import { useEffect } from 'react';
// import { requestToken, setToken } from '../Services/Request';
// import { getUserInfo } from '../Services/Storage';

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

  const { totalPrice } = useContext(AppContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await requestProducts('/products');
      setProductsList(products);
      console.log(productsList);
    };
    fetchProducts();
    console.log(productsList);
  }, []);

  return (
    <>
      <Header />
      <section className="product-list">
        {productsList.map((product) => (<ProductCard product={product}/>))}
      </section>
      <button data-testid="customer_products__button-cart">Ver Carrinho: 
        <p data-testid="customer_products__checkout-bottom-value">
          R$ {totalPrice}
          </p></button>
    </>
  );
}
