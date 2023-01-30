import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_VALUE = {
  id: 0,
  userId: 0,
  sellerId: 0,
  totalPrice: '',
  deliveryAddress: '',
  deliveryNumber: '',
  saleDate: '',
  status: '',
};

export const AppContext = createContext(DEFAULT_VALUE);

function ProviderContext({ children }) {
  const [order, setOrder] = useState(DEFAULT_VALUE.order);

  const contextValue = useMemo(
    () => ({
      order,
      setOrder,
    }),
    [order],
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
