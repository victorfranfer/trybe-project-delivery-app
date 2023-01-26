// import { useEffect } from 'react';
// import { requestToken, setToken } from '../Services/Request';
// import { getUserInfo } from '../Services/Storage';
import ProductCard from '../Components/ProductCard';
import Header from '../Components/Header';

export default function Products() {
  // useEffect(() => {
  //   const checkToken = async () => {
  //     const { token } = getUserInfo();
  //     setToken(token);
  //     await requestToken();
  //   };
  //   checkToken();
  // }, []);

  return (
    <>
      <Header />
      <ProductCard />
    </>
  );
}
