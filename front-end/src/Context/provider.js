import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_VALUE = {
  totalPrice: 0,
  cart: [],
};

export const AppContext = createContext(DEFAULT_VALUE);

function ProviderContext({ children }) {
  const [cart, setCart] = useState(DEFAULT_VALUE.cart);
  const [totalPrice, setTotalPrice] = useState(DEFAULT_VALUE.totalPrice);

  const contextValue = useMemo(
    () => ({
      cart,
      setCart,
      totalPrice,
      setTotalPrice,
    }),
    [cart, totalPrice],
  );

  return (
    <AppContext.Provider value={ contextValue }>{children}</AppContext.Provider>
  );
}

ProviderContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ProviderContext;
