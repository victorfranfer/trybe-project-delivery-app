import React, { createContext, useState } from 'react';

const DEFAULT_VALUE = {
  name: '',
  role: '',
};

export const AppContext = createContext(DEFAULT_VALUE);

function ProviderContext({ children }) {
  const [name, setName] = useState(DEFAULT_VALUE.name);
  const [role, setRole] = useState(DEFAULT_VALUE.role);

  const contextValue = {
    name,
    setName,
    role,
    setRole,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export { ProviderContext };
export default AppContext;
