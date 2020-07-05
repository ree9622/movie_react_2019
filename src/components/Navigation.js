import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div class="container shadow ">
      <Link class="btn btn-primary mr-2" to="/">
        Home
      </Link>
      <Link class="btn btn-primary mr-2" to="/about">
        About
      </Link>
    </div>
  );
}

export default Navigation;
