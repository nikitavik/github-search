import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader: React.FC = () => {
  return (
    <div className="d-flex justify-content-center m-4">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loader;
