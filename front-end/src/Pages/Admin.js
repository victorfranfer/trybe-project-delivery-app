import React from 'react';
import Header from '../Components/Header';
import FormCreateUser from '../Components/FormCreateUser';
import NameFormCreateUser from '../Components/NameFormCreateUser';

export default function Admin() {
  return (
    <>
      <Header />
      <div>
        <NameFormCreateUser />
        <FormCreateUser />
      </div>
    </>
  );
}
