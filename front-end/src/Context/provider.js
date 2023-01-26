import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_VALUE = {
  name: '',
  role: '',
  cart: [
    {
      productId: 1,
      name: 'name',
      quantity: 2,
      unitPrice: 9.99,
      subTotal: 19.98,
    },
    {
      productId: 2,
      name: 'name',
      quantity: 2,
      unitPrice: 9.99,
      subTotal: 19.98,
    },
  ],
};

export const AppContext = createContext(DEFAULT_VALUE);

function ProviderContext({ children }) {
  const [name, setName] = useState(DEFAULT_VALUE.name);
  const [role, setRole] = useState(DEFAULT_VALUE.role);
  const [cart, setCart] = useState(DEFAULT_VALUE.cart);

  const contextValue = useMemo(
    () => ({
      name,
      setName,
      role,
      setRole,
      cart,
      setCart,
    }),
    [name, role, cart],
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
