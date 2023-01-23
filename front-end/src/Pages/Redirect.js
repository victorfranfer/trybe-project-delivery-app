import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Redirect() {
  const redirect = useHistory();

  useEffect(() => {
    redirect.push('/login');
  }, []);

  return (
    <div>
      .
    </div>
  );
}

export default Redirect;
