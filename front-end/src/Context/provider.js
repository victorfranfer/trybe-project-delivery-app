import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_VALUE = {
  name: '',
  role: '',
};

export const AppContext = createContext(DEFAULT_VALUE);

function ProviderContext({ children }) {
  const [name, setName] = useState(DEFAULT_VALUE.name);
  const [role, setRole] = useState(DEFAULT_VALUE.role);

  const contextValue = useMemo(
    () => ({
      name,
      setName,
      role,
      setRole,
    }),
    [name, role],
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

export { ProviderContext };
export default AppContext;
