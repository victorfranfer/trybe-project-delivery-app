import React from 'react';
import Header from '../Components/Header';
import FormCreateUser from '../Components/FormCreateUser';
import NameFormCreateUser from '../Components/NameFormCreateUser';
import UserTable from '../Components/UserTable';
import { AdminProvider } from '../Context/AdminContex';

export default function Admin() {
  return (
    <AdminProvider>
      <Header />
      <div>
        <NameFormCreateUser />
        <FormCreateUser />
      </div>
      <div>
        <h2>Lista de usuários</h2>
        <UserTable />
      </div>
    </AdminProvider>
  );
}
