import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_VALUE = {
  name: '',
  role: '',
  cart: [],
};

export const AppContext = createContext(DEFAULT_VALUE);

function ProviderContext({ children }) {
  const [cart, setCart] = useState(DEFAULT_VALUE.cart);

  const contextValue = useMemo(
    () => ({
      cart,
      setCart,
    }),
    [cart],
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
