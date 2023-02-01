import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const UserTableContext = createContext([]);

export function UserTableProvider({ children }) {
  const [users, setUsers] = useState([]);

  const value = useMemo(
    () => ({
      users,
      setUsers,
    }),
    [users],
  );

  return (
    <UserTableContext.Provider value={ value }>
      {children}
    </UserTableContext.Provider>
  );
}

UserTableProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
