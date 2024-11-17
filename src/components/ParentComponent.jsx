import React, { useState } from 'react';
import Checkout from './pages/Checkout';

const ParentComponent = () => {
  const [order, setOrder] = useState(null); 

  return (
    <div>
      <Checkout setOrder={setOrder} />
    </div>
  );
};

export default ParentComponent;
