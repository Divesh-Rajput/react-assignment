import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Protected(props) {
  const { Component } = props;
  console.log(Component);
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem('login');
    if (!login) {
      navigate('/');
    }
  });

  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;
