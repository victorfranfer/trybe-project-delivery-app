import React, { useState } from 'react';
import Header from '../Components/Header';
import FormCreateUser from '../Components/FormCreateUser';
import NameFormCreateUser from '../Components/NameFormCreateUser';
import UserTable from '../Components/UserTable';

export default function Admin() {
  const [createUserError, setCreateUserError] = useState(false);
  return (
    <>
      <Header />
      <div>
        <NameFormCreateUser createUserError={ createUserError } />
        <FormCreateUser setCreateUserError={ setCreateUserError } />
      </div>
      <div>
        <h2>Lista de usuários</h2>
        <UserTable />
      </div>
    </>
  );
}
