import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const AdminContext = createContext([]);

export function AdminProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [createUserError, setCreateUserError] = useState(false);

  const value = useMemo(
    () => ({
      users,
      createUserError,
      setUsers,
      setCreateUserError,
    }),
    [users, createUserError],
  );

  return (
    <AdminContext.Provider value={ value }>
      {children}
    </AdminContext.Provider>
  );
}

AdminProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
