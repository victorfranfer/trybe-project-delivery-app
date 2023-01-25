import React, { useState } from 'react';
import Header from '../Components/Header';
import FormCreateUser from '../Components/FormCreateUser';
import NameFormCreateUser from '../Components/NameFormCreateUser';

export default function Admin() {
  const [createUserError, setCreateUserError] = useState(false);
  return (
    <>
      <Header />
      <div>
        <NameFormCreateUser createUserError={ createUserError } />
        <FormCreateUser setCreateUserError={ setCreateUserError } />
      </div>
    </>
  );
}
